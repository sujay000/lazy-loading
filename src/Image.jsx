import React from "react";

export default function Image(props) {
  return (
    <div>
      <img
        src={props.src}
        alt="random"
        loading="lazy"
        width="400px"
        height="300px"
      />
    </div>
  );
}
