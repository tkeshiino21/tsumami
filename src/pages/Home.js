import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import beer from "../images/beer.jpg";
import ImgContainer from "../components/utility/ImgContainer";
import { InlineButtons } from "../components/utility/ButtonContainers";
import R20 from "../components/R20";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";

const Home = props => {
  // divelopment mode:false, public mode: true

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClick = () => {
    setModalIsOpen(!modalIsOpen);
    props.onCheckAge();
  };
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
      {modalIsOpen ? <R20 handleYes={handleClick} /> : null}
    </Layout>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckAge: () => dispatch({ type: actionTypes.CHECK_AGE }),
  };
};

export default connect(null, mapDispatchToProps)(Home);
