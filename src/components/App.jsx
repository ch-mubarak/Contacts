import React from "react";
import Card from "./Card"
import contacts from "../contacts";

function createCard(contact) {
  return <Card
    key={contact.id}
    id={contact.id}
    name={contact.name}
    imgURL={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
