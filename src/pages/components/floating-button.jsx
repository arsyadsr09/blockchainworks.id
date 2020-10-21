import React from "react";
import { FloatingButton, Item } from "react-floating-button";

import downloadIcon from "../../assets/images/whatsapp.svg";

class Index extends React.Component {
  render() {
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
          <FloatingButton>
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
}

export default Index;
