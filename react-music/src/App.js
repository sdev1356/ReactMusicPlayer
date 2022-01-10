import React from 'react';
import {useState,useEffect} from "react";
import Player from "./components/Player"
import PlayerComponent from "./components/Player"
import PlayerControl from './components/PlayerControls';
import './App.css';
const App = () => {
  const [songs,setSongs]=useState([
    {
      "title":" 3Peg",
      "artist":"Sharry Mann",
        "img_src":"./songs_images/3peg.jpg",
      "src":"./songs/3 Peg Sharry Mann (Full Video) Mista Baaz Parmish Verma Ravi Raj Latest Punjabi Songs.mp3"
    },
    {
      "title":"Easier",
      "artist":"5Seconds Of Summer",
      "img_src":"./songs_images/easier.jpg",
      "src":"./songs/5 Seconds of Summer - Easier.mp3"
    },
    {
      "title":"MIA",
      "artist":"Drake feat. Bad Bunny",
      "img_src":"./songs_images/mia.jpg",
      "src":"./songs/Bad Bunny feat. Drake - Mia ( Video Oficial ).mp3"
    },
    {
      "title":"Hot Girl Bummer",
      "artist":"Blackbear",
      "img_src":"./songs_images/hot girl bummer.jpg",
      "src":"./songs/blackbear - hot girl bummer [big budget music video].mp3"
    },{
      "title":"Excuses",
      "artist":"AP Dhillon, Gurinder Gill Feat.Intense",
      "img_src":"./songs_images/excuses.jpg",
      "src":"./songs/Excuses AP Dhillon Gurinder Gill Intense Banger SZN.mp3"
    },
    {
      "title":"Told You So",
      "artist":"HRVY",
      "img_src":"./songs_images/told.jpg",
      "src":"./songs/HRVY - Told You So (Official Video).mp3"
    },
  ]);
  const [currentSongIndex,setCurrentSongIndex] = useState(0);
  const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);
  
  
  useEffect(()=>{
    setNextSongIndex(()=>{
    if (currentSongIndex + 1 >songs.length - 1 ){
      return 0;
    } else{
      return currentSongIndex + 1;
    }
  });
  },[currentSongIndex])
  
    return (
      <div className="App">
      <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
      </div>
    );
  }

export default App;