import React, { useState } from "react";
import { FloatingButton, Item } from "react-floating-button";

import downloadIcon from "../../assets/images/whatsapp.svg";

export default function FloatingMenu() {
  const [screenWidth] = useState(window.innerWidth);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100vw",
          height: "100vh",
        }}
      >
        <FloatingButton size={screenWidth < 720 ? 50 : 60}>
          <Item
            imgSrc={downloadIcon}
            backgroundColor="#2ed573"
            onClick={() => {
              window.open(" https://wa.link/tb4hiz", "_blank");
            }}
          />
        </FloatingButton>
      </div>
    </>
  );
}
