import styled from "styled-components";

export const ModalWrap = styled.div`
  display: flex;
  position: absolute;
  top: 20vh;
  left: 20vw;
`;

export const ModalOverlay = styled.div`
  display: inline-block;
  justify-content: center;
  overflow: auto;
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
  z-index: 1;
`;

export const PurpleButton = styled.button`
  color: purple;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  border-style: none;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  position: relative;
  align-self: center;
  width: 60%;
  max-width: 800px;
  padding: 30px 30px 15px;
  box-sizing: border-box;
  background: #fff;
  line-height: 1.4em;
`;
