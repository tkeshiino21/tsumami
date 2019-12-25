import { useMemo } from "react";

// export const AlcCalc = ({ volume }) => {
//   const PureAlcWeight = () => {
//     // ５度が一般的なビールのアルコール度数
//     // アルコールの比重は目安として0.8％で計算する。
//     return volume * 0.05 * 0.8;
//   };
//   const props = PureAlcWeight => {
//     //　飲酒量の単位（＝ドリンク）を計算する。
//     return PureAlcWeight / 10;
//   };
//   return AlcCalc;
// };

// export const props = PureAlcWeight => {
//   //　飲酒量の単位（＝ドリンク）を計算する。
//   return PureAlcWeight / 10;
// };

// export const AlcDuration = ({ props }) => {
//   //　１ドリンクを分解するのに2時間かかる。
//   return Math.round(props() * 2);
// };

const test = ({ props = 12 }) => {
  const double = props * 2;
  const doubleDouble = double * 2;
  return test;
};

const dangerJudge = props => {
  if (props > 20) {
    return [
      {
        level: 6,
        name: "昏睡期",
        discription: "命に関わるほど飲みすぎレベル",
        advice: "今すぐ飲むのをやめてください",
        emoji: "DEATH",
      },
    ];
  }
  if (props > 12) {
    return [
      {
        level: 5,
        name: "泥酔期",
        discription: "記憶を失うほど飲みすぎレベル",
        advice: "今すぐ飲むのをやめましょう",
        emoji: "_(´ཀ`」∠)_",
      },
    ];
  }
  if (props > 7) {
    return [
      {
        level: 4,
        name: "酩酊期",
        discription: "完全に飲み過ぎレベル",
        advice: "もう飲むのをやめた方がいいでしょう",
        emoji: "☀(രꇴര) ",
      },
    ];
  }
  if (props > 4) {
    return [
      {
        level: 3,
        name: "酩酊初期",
        discription: "ちょっと飲み過ぎレベル",
        advice: "そろそろ飲むのは控えたほうがいいでしょう",
        emoji: "ヽ(*ω*...) ",
      },
    ];
  }
  if (props > 2) {
    return [
      {
        level: 2,
        name: "ほろ酔い期",
        discription: "けっこう酔ってきたレベル",
        advice: "適宜お水を飲みましょう",
        emoji: "♪(≧∇≦)",
      },
    ];
  }
  if (props > 0) {
    return [
      {
        level: 1,
        name: "爽快期",
        discription: "飲みはじめのレベル",
        advice: "案外このくらいがベストですよ",
        emoji: "٩(ˊᗜˋ*)",
      },
    ];
  } else {
    return [
      {
        level: 0,
        name: "完全に素面",
        discription: "飲むなら乗るな、乗るなら飲むな",
        advice: "節度を持って飲もう",
        emoji: "(•̀ω•́ )✧",
      },
    ];
  }
};

export default dangerJudge;
