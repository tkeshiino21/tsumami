import React, { useState } from "react";
import Layout from "../components/Layout";
import { tsumamiData } from "../components/tsumamiData";

const Bear = () => {
  const [selectedStore, setSelectedStore] = useState();
  const [selectedTsumami, setSelectedTsumami] = useState([
    {
      name: "",
      value: "",
    },
  ]);
  const options = [
    {
      name: "Seven-Eleven",
      value: "sevenEleven",
    },
    {
      name: "LAWSON",
      value: "lawson",
    },
    {
      name: "All",
      value: "all",
    },
  ];
  return (
    <Layout>
      <form action="samplel.cgi" method="post">
        <p>メーカー</p>
        <select
          name="maker"
          value={selectedStore}
          onChange={e => setSelectedStore(e.target.value)}>
          {options.map((tsumami, index) => {
            return (
              <option key={index} value={tsumami.value}>
                {tsumami.name}
              </option>
            );
          })}
        </select>
      </form>
      <div>
        {tsumamiData
          .filter(tsumami => tsumami.store === selectedStore)
          .map((tsumami, index) => {
            return (
              <li key={index} value={tsumami.value}>
                {tsumami.name}
                <button
                  index={index}
                  onClick={() => setSelectedTsumami(tsumami)}>
                  choise
                </button>
              </li>
            );
          })}
      </div>
      <p>
        yourchoise:
        <strong>{selectedStore}</strong>
        <br />
        <strong>{selectedTsumami.name}</strong>
      </p>
    </Layout>
  );
};

export default Bear;
