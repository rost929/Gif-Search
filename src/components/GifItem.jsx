import React from "react";

export const GifItem = ({ id, title, gifUrl }) => {
  return (
    <li key={id} className="card">
      <p>{title}</p>
      <img src={gifUrl} alt={title} />
    </li>
  );
};
