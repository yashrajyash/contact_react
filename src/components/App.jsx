import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Avatar src="https://avatars.githubusercontent.com/u/66232462?v=4" />
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      />
    </div>
  );
}

export default App;
