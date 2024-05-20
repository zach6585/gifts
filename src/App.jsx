// import { useState } from 'react'
import './App.scss';
import useSound from 'use-sound';
// import { useState, useEffect } from 'react';
import buy_zach from "./assets/buy_zach.png";
import clickhere from "./assets/clickhere.gif";
import arrow from "./assets/arrow.png";
import doglick from "./assets/dlb.gif";
import bruh from './assets/bruh.mp3';


import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const [play] = useSound(bruh);

  const handleClick = () => {
    navigate("/shop");
  }

  return (
    <>
      <div className='App' onMouseMove={() => play()}>
        <button id="bzs" onClick={handleClick}>
          <img src={buy_zach} alt="Buy Zach" id="buyzach" />
        </button>

        <div className="click-here-plus-arrow" id="chpa1">
          <img src={clickhere} alt="click here!" className="clickhere" />
          <img src={arrow} alt="red arrow" className="arrow" />
        </div>

        <div className="click-here-plus-arrow" id="chpa2">
          <img src={clickhere} alt="click here!" className="clickhere" />
          <img src={arrow} alt="red arrow" className="arrow" />
        </div>
      </div>

      <div id="show-if-in-portrait-on-mobile">
        <img src={doglick} alt="dog licking baby" />
      </div>

    </>
  );
};

export default App
