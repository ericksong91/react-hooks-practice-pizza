import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizza, onEditClick }) {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizza && pizza.map((pi) => {
            return <Pizza key={pi.id} pizza={pi} onEditClick={onEditClick} />
          })
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
