import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import beer from "../images/beer.jpg";
import ImgContainer from "../components/utility/ImgContainer";
import { InlineButtons } from "../components/utility/ButtonContainers";
import { CentralizeWrapper } from "../components/utility/Container";
import R20 from "../components/R20";
import { connect } from "react-redux";
import * as actionTypes from "../store/action";

const Home = props => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
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
        {modalIsOpen ? (
          <R20
            handleYes={() => (setModalIsOpen(!modalIsOpen), props.onCheckAge())}
          />
        ) : null}
      </CentralizeWrapper>
    </Layout>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckAge: () => dispatch({ type: actionTypes.CHECK_AGE }),
  };
};

export default connect(null, mapDispatchToProps)(Home);
