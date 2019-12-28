import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { beerData } from "../data/beerData";
import { connect } from "react-redux";
import * as actionTypes from "../store/action";

const Beer = props => {
  const [selectedMaker, setSelectedMaker] = useState();
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
  if (props.age === false) {
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
        {beerData
          .filter(beer => beer.maker === selectedMaker)
          .map((beer, index) => {
            return (
              <li key={index}>
                {beer.name}
                <button
                  index={index}
                  onClick={() => props.onSelectBeer(beer.name)}>
                  choise
                </button>
              </li>
            );
          })}
      </div>
      <br />
      <hr />
      <br />
      <div>
        <p>yourchoise: </p>
        <br />
        {props.beer.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    age: state.age,
    beer: state.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectBeer: beer =>
      dispatch({ type: actionTypes.SELECT_BEER, item: beer }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
