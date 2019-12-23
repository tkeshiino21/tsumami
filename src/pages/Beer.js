import React, { useState } from "react";
import Layout from "../components/Layout";
import { beerData } from "../data/beerData";

const Bear = () => {
  const [selectedMaker, setSelectedMaker] = useState();
  const [selectedBeer, setSelectedBeer] = useState([
    {
      name: "",
      value: "",
    },
  ]);
  const options = [
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
              <li key={index} value={beer.value}>
                {beer.name}
                <button index={index} onClick={() => setSelectedBeer(beer)}>
                  choise
                </button>
              </li>
            );
          })}
      </div>
      <p>
        yourchoise:
        <strong>{selectedMaker}</strong>
        <br />
        <strong>{selectedBeer.name}</strong>
      </p>
    </Layout>
  );
};

export default Bear;
