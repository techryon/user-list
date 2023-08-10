import React from "react";
import "./App.css";
import ContactCard from "./ContactCard";

const App = () => {
  const contacts = [
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Jenny Han",
      email: "jenny.han@notreal.com",
      age: "25",
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Paul Jones",
      email: "paul.jones@notreal.com",
      age: "32",
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Peter Pan",
      email: "peter.pan@neverland.com",
      age: "100",
    },
  ];

  return (
    <div>
      {contacts.map((contact, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={contact.avatarUrl}
            name={contact.name}
            email={contact.email}
            age={contact.age}
          />
        );
      })}

      {/* <ContactCard
        avatarUrl='https://via.placeholder.com/150'
        name='Paul Jones'
        email='paul.jones@notreal.com'
        age='32'
      />
      <ContactCard
        avatarUrl='https://via.placeholder.com/150'
        name='Peter Pan'
        email='peter.pan@neverland.com'
        age='100'
      /> */}
    </div>
  );
};

export default App;
