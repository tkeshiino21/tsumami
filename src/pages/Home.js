import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import beer from "../images/beer.jpg";
import ImgContainer from "../components/ImgContainer";
import { InlineButtons } from "../components/ButtonContainers";
import R20 from "../components/R20";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Layout>
      <ImgContainer src={beer} />
      <InlineButtons>
        <Link to="beer">
          <button className="inline-button">ビールから選ぶ</button>
        </Link>
        <Link to="tsumami">
          <button className="inline-button">ツマミから選ぶ</button>
        </Link>
      </InlineButtons>

      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Modal</button>
      {modalIsOpen ? <R20 handleClick={() => setModalIsOpen(!modalIsOpen)} /> : null}
    </Layout>
  );
};

export default Home;
