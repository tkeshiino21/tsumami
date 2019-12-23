const AlchoolCalc = ({ volume, numOfCan }) => {
  let PureAlcWeight = () => {
    // 仮に一般的なビールのアルコール度数としておく（TODO:お酒の種類を選べるようにする）
    const alcPerVolume = 0.05;
    // アルコールの比重はお酒の種類によって微秒に異なるが、
    // 目安として0.8％で計算するのが一般的のようだ。
    const alcPerWeight = 0.8;
    return volume * numOfCan * alcPerVolume * alcPerWeight;
  };

  let DrinkUnit = () => {
    //　飲酒量の単位（＝ドリンク）を計算することで、
    //　飲み過ぎを簡単にチェックできるらしい。
    return PureAlcWeight() / 10;
  };

  let AlcDuration = () => {
    //　体重や性別によって変動してくるが、
    //　目安として１ドリンクを分解するのに2時間かかる。
    return Math.round(DrinkUnit() * 2);
  };

  return AlcDuration();
};

export default AlchoolCalc;
