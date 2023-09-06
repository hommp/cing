import React, { useRef, useState } from "react";
import sun from "./assets/sun.png";
import land from "./assets/237638644fire-burning-animated-gif-image.gif";
import cat from "./assets/cat.gif";
import music from "./assets/y2mate.com - Nujabes  Aruarian Dance.mp3";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const App = () => {
  const parallaxRef = useRef();
  const [currentPage, setCurrentPage] = useState(0); // Updated state variable

  const scrollToPage = (pageNumber) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(pageNumber);
      setCurrentPage(pageNumber); // Update the current page
    }
  };

  const OFFSET = 0.2;
  const SPEED = 0.05;

  return (
    <>
      <audio autoPlay loop>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Parallax pages={4} ref={parallaxRef}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${sun})`, backgroundSize: "cover" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        />
        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} alt="Cat" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={OFFSET}
          speed={SPEED}
          onClick={() => scrollToPage(3)}
        >
          <h2>Never Back Down Never What?</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2} onClick={() => scrollToPage(1)}>
          <h2>Never Give Up</h2>
        </ParallaxLayer>
      </Parallax>
      <div>
        <p>Current Page: {currentPage}</p>
      </div>
    </>
  );
};

export default App;
