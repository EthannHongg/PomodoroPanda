import React from "react";
import './homescreen.css';

function App() {
  return <Home {...HomeData} />;
}

export default App;


function Home(props) {
  const {
    main,
    seashell,
    money,
    panda,
    overlapGroup,
    ellipse,
    ellipse2,
    place,
    home,
    place2,
    setting,
    settings,
    vector,
    vector2,
    shop,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    pet,
    vector9,
    vector10,
    achievements,
    phoneUIProps,
  } = props;

  return (
    <div className="home">
      <PhoneUI {...phoneUIProps} />
      <div className="main" style={{ backgroundImage: `url(${main})` }}>
        <div className="currency">
          <div className="overlap-group1-2">
            <img className="seashell" alt="" src={seashell} />
            <div className="money ptsans-bold-white-24px">{money}</div>
          </div>
        </div>
        <div className="overlap-group2">
          <img className="panda" alt="" src={panda} />
          <div className="start-timer-button">
            <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <a href="/timer">
                <img className="ellipse" alt="" src={ellipse} />
                <img className="ellipse-1" alt="" src={ellipse2} />
                <h1 className="place valign-text-middle ptsans-bold-white-36px">{place}</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="overlap-group3">
          <a href="/homescreen">
            <img className="home" alt="" src={home} />
            <div className="place-1 rubik-normal-dove-gray-8px">{place2}</div>
            <div className="rect3"></div>
          </a>
        </div>
        <div className="overlap-group6">
        <a href="http://www.google.com/">
          <img className="setting" alt="" src={setting} />
          <div className="settings rubik-normal-dove-gray-8px">{settings}</div>
          <div className="rect1"></div>
        </a>
        </div>
        <div className="overlap-group7">
        <a href="http://www.google.com/">
          <div className="shop-icon">
            <div className="overlap-group-1">
              <img className="vector" alt="" src={vector} />
              <img className="vector-1" alt="" src={vector2} />
            </div>
          </div>
          <div className="shop rubik-normal-dove-gray-8px">{shop}</div>
          <div className="rect5"></div>
        </a>
        </div>
        <div className="overlap-group4">
        <a href="/customization">
          <div className="pets-icon">
            <div className="overlap-group-1">
              <img className="vector-2" alt="" src={vector3} />
              <img className="vector-3" alt="" src={vector4} />
              <img className="vector-4" alt="" src={vector5} />
              <img className="vector-5" alt="" src={vector6} />
              <img className="vector-6" alt="" src={vector7} />
              <img className="vector-7" alt="" src={vector8} />
            </div>
          </div>
          <div className="pet rubik-normal-dove-gray-8px">{pet}</div>
          <div className="rect4"></div>
        </a>
        </div>
        <div className="overlap-group5">
        <a href="/achievements">
          <div className="achievements-icon">
            <div className="overlap-group-3">
              <img className="vector-8" alt="" src={vector9} />
              <img className="vector-9" alt="" src={vector10} />
            </div>
          </div>
          <div className="achievements rubik-normal-dove-gray-8px">{achievements}</div>
          <div className="rect2"></div>
        </a>
        </div>
      </div>
    </div>
  );
}


function PhoneUI(props) {
  const { exclude, notch, mobileSignal, wifi, overlapGroup1, rectangle, combinedShape, x941 } = props;

  return (
    <div className="phone-ui">
      <div className="overlap-group">
        <div className="notch">
          <div className="overlap-group1">
            <img className="exclude" alt="" src={exclude} />
            <img className="notch-1" alt="" src={notch} />
          </div>
        </div>
        <div className="right-side">
          <img className="mobile-signal" alt="" src={mobileSignal} />
          <img className="wifi" alt="" src={wifi} />
          <div className="battery">
            <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <img className="rectangle" alt="" src={rectangle} />
            </div>
            <img className="combined-shape" alt="" src={combinedShape} />
          </div>
        </div>
        <img className="x941" alt="" src={x941} />
      </div>
    </div>
  );
}
const phoneUIData = {
    exclude: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/releases/605409aef32da14ab951b088/img/exclude@2x.png",
    notch: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/notch-1@2x.svg",
    mobileSignal: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/mobile-signal@2x.svg",
    wifi: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/wifi-1@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/rectangle-2@2x.svg",
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/rectangle-1@2x.svg",
    combinedShape: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/combined-shape-1@2x.svg",
    x941: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/9-41@2x.svg",
};

const HomeData = {
    main: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/homebackground@1x.svg",
    seashell: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/releases/605409aef32da14ab951b088/img/seashell@2x.svg",
    money: "1000",
    panda: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/panda@2x.svg",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/ellipse@2x.svg",
    ellipse: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/ellipse-1@2x.svg",
    ellipse2: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/ellipse-2@2x.svg",
    place: "Start",
    home: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/home-1@2x.svg",
    place2: "Home",
    setting: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/releases/605409aef32da14ab951b088/img/setting@2x.svg",
    settings: "Settings",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/releases/605409aef32da14ab951b088/img/exclude@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/vector-1@2x.svg",
    shop: "Shop",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/releases/605409aef32da14ab951b088/img/exclude@2x.png",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/vector-3@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/vector-4@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/vector-4@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/vector-3@2x.svg",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/vector-27@2x.svg",
    pet: "Pet",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/releases/605409aef32da14ab951b088/img/exclude@2x.png",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/6053b2aa5929ede297f0fd24/img/vector-9@2x.svg",
    achievements: "Achievements",
    phoneUIProps: phoneUIData,
};