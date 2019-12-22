import React, { useMemo } from "react";
import styled from "styled-components";

const Message = styled.p`
  text-align: center;
  color: #f1f1f1;
  font-size: 8px;
  font-weight: thin;
`;

const RandomMessage = () => {
  const rand = useMemo(() => {
    return Math.floor(Math.random() * 5);
  }, []);

  const SwitchRandom = () => {
    switch (rand) {
      case 0:
        return <Message>TSUMAMIのような侘しさにI know... 怯えてる</Message>;
      case 1:
        return <Message>きっと世は情け oh, my distiny...!</Message>;
      case 2:
        return <Message>見つめ合うと素直におしゃべりできない（素面）</Message>;
      case 3:
        return <Message>I know 気付いている hoo</Message>;
      case 4:
        return <Message>思い出はいつの日も　雨。</Message>;
      default:
        return <p>somethig wrong!{console.log(rand)}</p>;
    }
  };
  return <SwitchRandom />;
};

export const RandomAdvice = () => {
  const rand = useMemo(() => {
    return Math.floor(Math.random() * 5);
  }, []);

  const SwitchRandom = () => {
    switch (rand) {
      case 0:
        return (
          <Message>
            ウコンには抗炎症作用や肝臓保護作用があると言われていますが、
            ヒトでの研究データがありません。
            ウコンのドリンクが二日酔い予防や改善に効くというのは、
            いわゆる「プラシーボ効果」なのかもしれません。
          </Message>
        );
      case 1:
        return (
          <Message>
            二日酔いに効くのはコーラ、サイダー、スプライト、ファンタ
          </Message>
        );
      case 2:
        return <Message>見つめ合うと素直におしゃべりできない（素面）</Message>;
      case 3:
        return <Message>I know 気付いている hoo</Message>;
      case 4:
        return <Message>思い出はいつの日も　雨。</Message>;
      default:
        return <p>somethig wrong!{console.log(rand)}</p>;
    }
  };
  return <SwitchRandom />;
};

export default RandomMessage;
