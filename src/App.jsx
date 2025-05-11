
import './App.css'
import { Buttons } from './components/buttons';
import { Alpaca } from './components/alpaca';
import { useState } from 'react';

function App() {

  const RandomFunc = (btns) => {
    const selection = {};
  
    Object.entries(btns).forEach(([category, options]) => {
      const values = Object.values(options);
      const randomValue = values[Math.floor(Math.random() * values.length)];
  
      selection[category] =
        category === "backgrounds" ? randomValue : randomValue[1]; // only take the filename from other categories
    });
  
    return selection;
  };
  

  const btns = {
    "backgrounds" : {
        1 : "blue50.png",
        2 : "blue60.png",
        3 : "blue70.png",
        4 : "darkblue30.png",
        5 : "darkblue50.png",
        6 : "darkblue70.png",
        7 : "green50.png",
        8 : "green60.png",
        9 : "green70.png",
        10 : "grey40.png",
        11 : "grey70.png",
        12 : "grey80.png",
        13 : "red50.png",
        14 : "red60.png",
        15 : "red70.png",
        16 : "yellow50.png",
        17 : "yellow60.png",
        18 : "yellow70.png",

    },

    "accessories": {
        1 : ["Earings","earings.png"],
        2 : ["Flower","flower.png"],
        3 : ["Glasses","glasses.png"],
        4 : ["Headphones","headphones.png"],
    },

    "ears" : {
        1: ["Default","default.png"],
        2: ["Tilt Backward","tilt-backward.png"],
        3: ["Tilt Forward","tilt-forward.png"],
    },

    "eyes" : {
        1: ["Angry","angry.png"],
        2: ["Default","default.png"],
        3: ["Naughty","naughty.png"],
        4: ["Panda","panda.png"],
        5: ["Smart","smart.png"],
        6: ["Star","star.png"],
    },

    "hair" : {

        1 : ["Bang","bang.png"],
        2 : ["curls","curls.png"],
        3 : ["Default","default.png"],
        4 : ["Elegant","elegant.png"],
        5 : ["Fancy","fancy.png"],
        6 : ["Quiff","quiff.png"],
        7 : ["Short","short.png"],
    }, 

    "leg" : {
        1: ["Bubble Tea","bubble-tea.png"],
        2: ["Cookie","cookie.png"],
        3: ["Default","default.png"],
        4: ["Game Console","game-console.png"],
        5: ["Tilt Backward","tilt-backward.png"],
        6: ["Tilt Farward","tilt-forward.png"],
    },

    "mouth" : {
        1 : ["Astonished","astonished.png"],
        2 : ["Default","default.png"],
        3 : ["Eating","eating.png"],
        4 : ["Laugh","laugh.png"],
        5 : ["Tongue","tongue.png"],
    },

    "neck" : {
        1 : ["Bend Backward","bend-backward.png"],
        2 : ["Bend Forward","bend-forward.png"],
        3 : ["Default","default.png"],
        4 : ["Thick","thick.png"],
    }
  }

  const [alpacaAvatar,setAlpacaAvatar] = useState(RandomFunc(btns));


  return (
    <>

    <h1>Alpaca Image Generator</h1>

    <Buttons btns = {btns} newAlpaca = {setAlpacaAvatar}></Buttons>

    <Alpaca image={alpacaAvatar} />

    </>
  )
}

export default App
