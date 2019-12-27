import React, { useState } from "react";
import Layout from "../components/Layout";
import { tsumamiData } from "../data/tsumamiData";
import { connect } from "react-redux";
import * as actionTypes from "../store/action";

const Tsumami = props => {
  const [selectedStore, setSelectedStore] = useState();
  const options = [
    {
      name: "選択してください",
      value: "default",
    },
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
              <li key={index}>
                {tsumami.name}
                <button
                  index={index}
                  onClick={() => props.onSelectTsumami(tsumami.name)}>
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
        <p>yourchoise:</p>
        <br />
        {props.tsumami.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    tsumami: state.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectTsumami: tsumami =>
      dispatch({ type: actionTypes.SELECT_TSUMAMI, item: tsumami }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tsumami);
