import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { beerData } from "../data/beerData";
import { useSelector, useDispatch } from "react-redux";
import { selectBeer } from "../store/actions/index";

const Beer = () => {
  const [selectedMaker, setSelectedMaker] = useState();
  const beer = useSelector(state => state.reducer.items);
  const age = useSelector(state => state.reducer.age);
  const dispatch = useDispatch();
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
        {beerData
          .filter(beer => beer.maker === selectedMaker)
          .map((beer, index) => {
            return (
              <li key={index}>
                {beer.name}
                <button
                  index={index}
                  onClick={() => dispatch(selectBeer(beer.name))}>
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
        {beer.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        {console.log(beer)}
      </div>
    </Layout>
  );
};

export default Beer;
