import React, { useEffect, useState } from "react";
import "./App.css";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [iframeData, setIframeData] = useState({});
  const receiveMessage = (evt) => {
    if (evt.origin === "https://sparkly-peony-381f03.netlify.app") {
      setIframeData(evt.data)
    }
  };
  window.addEventListener("message", receiveMessage, false);
  return (
    <div className="App">
      <div>
      <label>Iframe Container</label>  
      <iframe
        src="https://sparkly-peony-381f03.netlify.app/contact"
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
      </div>
      <div className="parent">
      <label>Parent Container</label>
        <pre>{JSON.stringify(iframeData, undefined, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
