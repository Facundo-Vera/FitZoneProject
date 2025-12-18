import React from "react";

const ButtonApp = ({ title,  href, background, bghover }) => {
  return (
    <div>
      <a
        className={`${background} rounded-lg text-black text-xs px-4 lg:text-base lg:px-6 py-1 font-bold ${bghover} transition duration-500 ease-in-out`}
        href={href}
      >
        {title}
      </a>
    </div>
  );
};

export default ButtonApp;