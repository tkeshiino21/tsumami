import React from "react";
import Layout from "../components/Layout";
import { RandomAdvice } from "../components/RandomMessage";

const Order = () => {
  return (
    <Layout>
      <h3>ワンポイントアドバイス</h3>
      <RandomAdvice />
    </Layout>
  );
};

export default Order;
