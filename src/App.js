import React from "react";
import Header from "./components/Header"
import Data from "./data"
import Item from "./components/item"

export default function App() {

  const ShoeCards = Data.map(shoes => {
    return (
      <Item 
        shoes = {shoes}
      />
    )
  })




  return (
    <div>
      <Header />
      <div className="shoes-cards">
        {ShoeCards}
      </div>
    </div>
  )
}