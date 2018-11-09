import React from "react";

export default function House(props) {
  let { name, address, city, state, zip } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{address}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zip}</p>
      <button>DELETE</button>
    </div>
  );
}
