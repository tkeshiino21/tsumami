import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import beer from "../images/beer.jpg";
import ImgContainer from "../components/utility/ImgContainer";
import { InlineButtons } from "../components/utility/ButtonContainers";
import { CentralizeWrapper } from "../components/utility/Container";
import R20 from "../components/R20";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Layout>
      <CentralizeWrapper>
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
        {modalIsOpen ? (
          <R20 handleClick={() => setModalIsOpen(!modalIsOpen)} />
        ) : null}
      </CentralizeWrapper>
    </Layout>
  );
};

export default Home;
