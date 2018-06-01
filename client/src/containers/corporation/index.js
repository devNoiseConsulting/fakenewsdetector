import React from "react";

export default function Corporation(props) {
  const { corporation } = props;

  if (corporation) {
    return (
      <p>
        This website belongs to the corporation:{" "}
        <a href={corporation.info} target="_blank">
          {corporation.name}
        </a>
      </p>
    );
  } else {
    return <span />;
  }
}
