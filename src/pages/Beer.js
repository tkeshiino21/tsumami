import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { beerData } from "../data/beerData";
import { useSelector, useDispatch } from "react-redux";
import { useFirebase, useFirestore, getFirebase } from "react-redux-firebase";
import { selectBeer, beerSubmit } from "../store/actions/index";
import { inputsData, InputsTypeRender } from "../components/Input";

const FixedBottom = styled.div`
  position: absolute;
  bottom: 50px;
`;

const InlineList = styled.div`
  display: flex;
  width: 700px;
  flex-direction: row;
  justify-content: space-around;
`;

const Beer = () => {
  const firebase = useFirebase();
  const firestore = useFirestore();
  const [hisItems, setHisItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const onClickHundler = e => {
    e.preventDefault();
    console.log("e.target.value:", e.target.value);
    setItems([...items, e.target.value]);
  };
  const [selectedMaker, setSelectedMaker] = useState();
  const beer = useSelector(state => state.alc.items);
  const age = useSelector(state => state.alc.age);
  const auth = useSelector(state => state.firebase.auth);
  const orders = useSelector(state => state.firebase);
  const dispatch = useDispatch();
  const state = inputsData({
    inputHandler: null,
    inputElementConfig: null,
    value: null,
  });
  // const MyInput = (
  //   <inputsTypeRender
  //     type={inputsData.elementType}
  //     required={inputsData.required}
  //   />
  // );

  // const potato = auth.uid;
  // const usersOrder = firestore
  //   .collection("orders")
  //   .whereField("ref", { isEqualTo: { potato } })
  //   .get();
  // console.log(usersOrder);

  const formElementsArray = [];
  // for (let key in state.orderForm) {
  //   formElementsArray.push({ id: key, config: state.orderForm[key] });
  // }
  // {
  //   console.log("form:", formElementsArray);
  //   console.log("auth:", auth.uid);
  //   console.log("firestore", orders);
  // }

  useEffect(() => {
    getFirebase()
      .firestore()
      .collection("orders")
      .where("uid", "==", auth.uid)
      .get()
      .then(res => {
        const Items = () => {
          return res.docs.map(doc => {
            return doc.data().items.map(res => {
              return res;
            });
          });
        };
        setHisItems(Items);
      });
  }, [Beer]);
  console.log("hisItems:", ...hisItems);
  const options = [
    {
      name: "選択してください",
      value: "default",
    },
    {
      name: "SUNTORY",
      value: "suntory",
    },
    {
      name: "KIRIN",
      value: "kirin",
    },
    {
      name: "SAPPORO",
      value: "sapporo",
    },
    {
      name: "Others",
      value: "others",
    },
  ];
  if (age === false) {
    return <Redirect to={"./"} />;
  }
  return (
    <Layout>
      <form action="samplel.cgi" method="post">
        <p>メーカー</p>
        <select
          name="maker"
          value={selectedMaker}
          onChange={e => setSelectedMaker(e.target.value)}>
          {options.map((beer, index) => {
            return (
              <option key={index} value={beer.value}>
                {beer.name}
              </option>
            );
          })}
        </select>
      </form>
      <div>
        <ol>
          {beerData
            .filter(beer => beer.maker === selectedMaker)
            .map((beer, index) => {
              return (
                <li key={index}>
                  <button value={beer.name} onClick={onClickHundler}>
                    {beer.name}
                  </button>
                </li>
              );
            })}
        </ol>
      </div>
      <FixedBottom>
        <InlineList>
          <div>
            <p>yourchoise: </p>
            <br />
            {beer.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
            {console.log(items)}
          </div>
          <div>
            <p>everyone's choise: </p>
            <br />
            {beer.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
            {console.log(
              "users:",
              users.map(res => {
                return res.name;
              })
            )}
            {users.map((user, index) => {
              return (
                <li key={index}>
                  {user.name}　{user.lastName}
                </li>
              );
            })}
          </div>
          <form>
            <input name="radio" type="image" id="1" />
            <input name="radio" type="button" id="2" />
            {/* const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        for (le)
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => ( */}
          </form>
          <h1>aa</h1>
        </InlineList>
        <button
          onClick={() =>
            dispatch(beerSubmit({ payload: { uid: auth.uid, items: items } }))
          }>
          BUTTON
        </button>
      </FixedBottom>
      {/* {formElementsArray.map((formElement, index) => {
        return (
          <label key={index} htmlFor={formElement.config.label}>
            <InputsTypeRender
              type={formElement.config.type}
              placeholder={formElement.config.placeholder}
            />
          </label>
        );
      })} */}
    </Layout>
  );
};

export default Beer;
