import React, { useContext, useRef } from "react";
import dynamic from "next/dynamic";

import { WindowDimensionsContext } from "src/contexts/WindowDimensionsContext";

import HandleLargeDisplay from "@/components/HandleLargeDisplay";
// import Header from "../../components/home/Header";
const Header = dynamic(() => import("@/components/home/Header/Header"), {
  ssr: false,
});
import Introduction from "@/components/home/Introduction/Introduction";
import Creations from "@/components/home/Creations/Creations";

function Home() {
  const { device } = useContext(WindowDimensionsContext);
  const backgroundImageRef = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      <img
        ref={backgroundImageRef}
        style={{ position: "absolute", top: 0, width: "100%" }}
        // srcSet="/images/mobile/image-hero.jpg 750w, /images/desktop/image-hero.jpg 1440w,"
        src={`/images/${device}/image-hero.jpg`}
      />
      <HandleLargeDisplay>
        <Header backgroundImageRef={backgroundImageRef} />
        <Introduction />
        <Creations />
      </HandleLargeDisplay>
    </div>
  );
}

export default Home;
