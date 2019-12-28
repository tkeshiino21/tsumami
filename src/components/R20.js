import React from "react";
import { InlineButtons } from "./utility/ButtonContainers";
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
          <h3 className="secondary">お酒はハタチになってから。</h3>
          <p className="secondary">あなたは20歳以上ですか？</p>
          <InlineButtons>
            <PurpleButton onClick={props.handleYes} className="inline-button">
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
