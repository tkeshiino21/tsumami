import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

export const authSuccess = response => {
  return { type: actionTypes.AUTH_SUCCESS, payload: response };
};

export const authFail = response => {
  return { type: actionTypes.AUTH_FAIL, payload: response };
};

export const authAction = ({ payload }) => {
  return (dispatch, getState, getFirebase) => {
    switch (payload.method) {
      case "signup":
        return (
          dispatch(authStart()),
          console.log(payload),
          getFirebase()
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(res => {
              const uid = getFirebase().auth().currentUser.uid;
              getFirebase()
                .firestore()
                .collection("users")
                .doc(res.user.uid)
                .set({ name: payload.name })
                .catch(err => dispatch(authFail(err)));
            })
        );
      case "login":
        return (
          dispatch(authStart()),
          getFirebase()
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then(res => dispatch(authSuccess(res)))
            .catch(err => dispatch(authFail(err)))
        );
      case "logout":
        return (
          dispatch(authStart()),
          getFirebase()
            .auth()
            .signOut()
            .then(res => dispatch(authSuccess(res)))
            .catch(err => dispatch(authFail(err)))
        );
      default:
        console.log("default");
    }
  };
};

export const sendNotification = payload => {
  return {
    type: actionTypes.ADD_BEER,
    payload,
  };
};

export function addTodo(newTodo) {
  return (dispatch, getState, getFirebase) => {
    return getFirebase()
      .firestore()
      .ref("todos")
      .push(newTodo)
      .then(() => {
        dispatch(sendNotification("Todo Added"));
      });
  };
}

export const firestorePush = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase
      .firestore()
      .collection("users")
      .add({ name: "newTodo" });
  };
};
