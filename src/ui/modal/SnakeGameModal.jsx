import React from "react";

const SnakeGameModal = ({ children }) => {
  return (
    <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center rounded-lg z-20">
      <div className="text-center">{children}</div>
    </div>
  );
};

export default SnakeGameModal;
