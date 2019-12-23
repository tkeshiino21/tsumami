import React, { useState } from "react";
import Layout from "../components/Layout";
import AlchoolCalc from "../components/AlchoolCalc";

const BeerBlog = () => {
  const [listIsOpen, setListIsOpen] = useState(false);
  const [volume, setVolume] = useState(135);
  const [numOfCan, setNumOfCan] = useState(1);
  return (
    <Layout>
      <h1>お酒と賢く付き合おう</h1>
      <section className="appropriate-alchool">
        <h5>
          「節度ある適度な飲酒量」は、1日平均純アルコールで約20g程度であるとされています。
          <a href="https://www.e-healthnet.mhlw.go.jp/information/alcohol/a-03-003.html">
            厚生労働省ホームページ
          </a>
          より
        </h5>
        <div className="alchool-list">
          <p>
            つまりは、だいたいこのくらい→
            <button onClick={() => setListIsOpen(!listIsOpen)}>
              酒量の目安
            </button>
          </p>
          {listIsOpen ? (
            <ul>
              <li>ビール：ロング缶1本</li>
              <li>日本酒：1合</li>
              <li>ウィスキー：ダブル1杯</li>
              <li>焼酎：グラス1/2杯</li>
              <li>ワイン：グラス2杯弱</li>
              <li>チューハイ：普通サイズ缶1本</li>
              <li>ビール：ロング缶1本</li>
            </ul>
          ) : null}
        </div>
      </section>
      <section>
        <p>飲み過ぎた場合は調べてみよう</p>
        <select
          name="サイズ"
          value={volume}
          onChange={e => setVolume(e.target.value)}>
          <option value="135">ショート</option>
          <option value="350">通常</option>
          <option value="500">ロング</option>
        </select>
        <button onClick={() => setNumOfCan(numOfCan * 1 - 1)}>-</button>
        {console.log(typeof numOfCan)}
        <select
          name="本数"
          value={numOfCan}
          onChange={e => setNumOfCan(e.target.value)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button onClick={() => setNumOfCan(numOfCan * 1 + 1)}>+</button>
      </section>
      <p>
        アルコールがなくなるまでにかかる時間：
        <AlchoolCalc volume={volume} numOfCan={numOfCan} />
        時間
      </p>
    </Layout>
  );
};

export default BeerBlog;
