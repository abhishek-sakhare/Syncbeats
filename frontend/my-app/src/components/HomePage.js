import React from "react";
import "./styles/HomePage.css";
import ParticlesBackground from "./ParticlesBackground";
import { useRef, useEffect, useState } from "react";


function HomePage() {
  const auth = localStorage.getItem("user");
  const API_KEY = "AIzaSyDzsqwFwGBhzNX_6-zTf2W5YOAqeRYku5Q";
  const searchInput = useRef(null);
  const playerRef = useRef(null);


  const playSong= async() => {

    const query = searchInput.current.value;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(query+" song")}&key=${API_KEY}`;

    const result = await fetch(url);
    const data = await result.json();

    console.log(query);
    console.log(data);
    

    const videoId = data.items[0].id.videoId;
    console.log(videoId);

    playerRef.current.innerHTML = `
    <iframe width="0" height="0"
    //   src="https://www.youtube.com/embed/${videoId}?autoplay=1" width="560" height="315"
    //   frameborder="0" allow="autoplay; encrypted-media">
    // </iframe>
    `; //width="560" height="315"
     
  }
function pauseSong() {
 window.location.reload();
}

  return (
    <div className="homepage-container">
      <ParticlesBackground />
      <div className="centered-text">
        <h1>Welcome, {JSON.parse(auth).name}!</h1>
        <div className="searchbar">
          <input ref={searchInput} type="text" placeholder="Search a song" />
          <button onClick={playSong}>Play</button>
          <button onClick={pauseSong}>Stop</button>
        </div>
        <div ref={playerRef}></div>
      </div>
      <div className="section1">

      </div>
    </div>
  );
}

export default HomePage;
