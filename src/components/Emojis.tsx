import React from "react";

const Emojis = ({ emoji }: { emoji: string }) => {
  return (
    <span role="img" aria-label="emoji">
      {emoji}
    </span>
  );
};

export default Emojis;
