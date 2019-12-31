import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
`;

const fadeout = keyframes`
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
`;

const SnackBar = styled.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 999;
  left: 50%;
  bottom: 30px;
  .show {
    visibility: visible !important;
    animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
  }
`;

export default SnackBar;
