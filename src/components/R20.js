import React from "react";
import { InlineButtons } from "./ButtonContainers";
import {
  ModalWrap,
  ModalContent,
  ModalOverlay,
  PurpleButton,
  CancelButton,
} from "./Modal";

const R20 = props => {
  return (
    <ModalWrap>
      <ModalOverlay>
        <ModalContent>
          <h3>お酒はハタチになってから。</h3>
          <p>あなたは20歳以上ですか？</p>
          <InlineButtons>
            <PurpleButton onClick={props.handleClick} className="inline-button">
              はい
            </PurpleButton>
            <CancelButton
              className="inline-button"
              onClick={() =>
                (window.location.href =
                  "https://qiita.com/torugatoru/items/d7941624a84973849721")
              }>
              いいえ
            </CancelButton>
          </InlineButtons>
        </ModalContent>
      </ModalOverlay>
    </ModalWrap>
  );
};

export default R20;
