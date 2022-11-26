import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizza, setPizza] = useState(null);
  const [editPizza, setEditPizza] = useState({})


  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((data) => setPizza(data))
  }, [])

  function handleEditClick(id) {
    const pizzaFind = pizza.find(p => p.id === id);
    setEditPizza(pizzaFind);
  }

  function handlePizzaChange(pizzaNew) {
    console.log("you brought it up", pizzaNew)

    fetch(`http://localhost:3001/pizzas/${pizzaNew.id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(pizzaNew)
    })
      .then((r) => r.json())
      .then(() => {
        const updatedPizzaList = [...pizza].map(p => {
          if (p.id === pizzaNew.id) {
            return pizzaNew
          } else {
            return p
          }
        })

        setPizza(updatedPizzaList);
      })


  }

  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} onPizzaChange={handlePizzaChange} />
      <PizzaList pizza={pizza} onEditClick={handleEditClick} />
    </>
  );
}

export default App;
