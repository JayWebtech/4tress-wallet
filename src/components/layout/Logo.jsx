import React from "react";

const Logo = ({ width = 80 }) => {
  return (
    <div>
      <img
        src="/img/wallet.png"
        style={{ width: `${width}px` }}
        alt="wallet logo"
      />
    </div>
  );
};

export default Logo;
