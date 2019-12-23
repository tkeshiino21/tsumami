import React, { useMemo } from "react";
import styled from "styled-components";

const Message = styled.p`
  color: #f1f1f1;
  font-weight: thin;
  font-size: ${props => (props.subtitle ? "8px" : "14px")};
  text-align: ${props => (props.subtitle ? "center" : "start")};
`;

export const RandomMessage = () => {
  const rand = useMemo(() => {
    return Math.floor(Math.random() * 5);
  }, []);

  const SwitchRandom = () => {
    switch (rand) {
      case 0:
        return (
          <Message subtitle>TSUMAMIのような侘しさにI know... 怯えてる</Message>
        );
      case 1:
        return <Message subtitle>きっと世は情け oh, my distiny...!</Message>;
      case 2:
        return (
          <Message subtitle>
            見つめ合うと素直におしゃべりできない（素面）
          </Message>
        );
      case 3:
        return <Message subtitle>I know 気付いている hoo</Message>;
      case 4:
        return <Message subtitle>思い出はいつの日も　雨。</Message>;
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
            ウコンには抗炎症作用や肝臓保護作用があると言われているが、
            <br />
            ヒトでの研究データがなくその効果はかなり怪しいものだ。
            <br />
            ウコンのドリンクが二日酔い予防や改善に効くというのは、
            <br />
            いわゆる「プラシーボ効果」なのかもしれない。
          </Message>
        );
      case 1:
        return (
          <Message>
            二日酔いの研究において現段階で確かなことは、
            <br />
            やはり水分をたくさん摂取するのがいいということだ。
            <br />
            さらに言えば、水よりスポーツドリンクが好ましいが、
            <br />
            なければ就寝前に水を大量に飲んでおくだけでも翌日の調子がだいぶ違う。
          </Message>
        );
      case 2:
        return (
          <Message>
            胃がムカムカするような二日酔いの際には、
            <br />
            冷たい水を飲むのは荒れている胃にとって好ましくない。
            <br />
            白湯や暖かい味噌汁などをすすれば、
            <br />
            胃に優しくしつつ不足している水分を補うことができる。
          </Message>
        );
      case 3:
        return (
          <Message>
            お酒の席ではチェイサーを挟むというのが、 <br />
            王道にして最高の二日酔い対策である。 <br />
            私自身の経験上、お酒：２、チェイサー：１の割合で飲むと、
            <br />
            二日酔いに悩まされることはまったくない。
          </Message>
        );
      case 4:
        return (
          <Message>
            ちゃんぽん（いろんな種類のお酒を飲むこと）すると二日酔いになる理由は、{" "}
            <br />
            お酒の種類を変えることによってどれくらい飲んだかの判断がつきにくくなるからだ、{" "}
            <br />
            というのが有力な説らしい。 <br />
            お酒の席でやらかしたくなければ、ビールと水だけにするのがいいかもしれない。
          </Message>
        );
      default:
        return <p>somethig wrong!{console.log(rand)}</p>;
    }
  };
  return <SwitchRandom />;
};
