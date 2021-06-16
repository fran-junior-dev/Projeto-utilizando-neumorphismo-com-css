import './App.css';
import { FaFire } from 'react-icons/fa'
import { GiCutDiamond, GiMetalBar } from 'react-icons/gi'

function App() {

  setInterval(() => {

    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    const hr1 = document.querySelector('#hr1');
    const mn1 = document.querySelector('#mn1');
    const sc1 = document.querySelector('#sc1');

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
  
    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    hr1.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn1.style.transform = `rotateZ(${mm}deg)`;
    sc1.style.transform = `rotateZ(${ss}deg)`;


  })

  return (
    <body>

      <body className="body1">

        <div className="Clock">
          <div className="Hour">
            <div className="Hr" id="hr"></div>
          </div>

          <div className="Min">
            <div className="Mn" id="mn"></div>
          </div>

          <div className="Sec">
            <div className="Sc" id="sc"></div>
          </div>
        </div>

        <div className="Loader">
          <div Style='--i:0'></div>
          <div Style='--i:1'></div>
          <div Style='--i:2'></div>
          <div Style='--i:3'></div>
          <div Style='--i:4'></div>
        </div>

        <div>
          <a className="azito1" href="#">Press<span></span></a>
        </div>

        <div className="IconsNeon1">
          <div><b> <FaFire className="Fafire1"/> </b></div>
          <div><b> <GiMetalBar className="GiMetalBar1"/> </b></div>
          <div><b> <GiCutDiamond className="GiCutDiamond1"/> </b></div>
        </div>

      </body>

      <body className="IconsBody">

        <div className="Clock1">
          <div className="Hour1">
            <div className="Hr1" id="hr1"></div>
          </div>

          <div className="Min1">
            <div className="Mn1" id="mn1"></div>
          </div>

          <div className="Sec1">
            <div className="Sc1" id="sc1"></div>
          </div>
        </div>

        <div className="Loader1">
          <div Style='--i:0'></div>
          <div Style='--i:1'></div>
          <div Style='--i:2'></div>
          <div Style='--i:3'></div>
          <div Style='--i:4'></div>
        </div>

        <div>
          <a className="azito2" href="#">Press<span></span></a>
        </div>

        <div className="IconsNeon">
          <div><b> <FaFire className="Fafire"/> </b></div>
          <div><b> <GiMetalBar className="GiMetalBar"/> </b></div>
          <div><b> <GiCutDiamond className="GiCutDiamond"/> </b></div>
        </div>

      </body>

    </body>
  );
}

export default App;
