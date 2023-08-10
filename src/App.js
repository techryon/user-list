import React from "react";
import "./App.css";
import ContactCard from "./ContactCard";

const App = () => {
  return (
    <div>
      <ContactCard
        imgUrl='https://via.placeholder.com/150'
        name='Jenny Han'
        email='jenny.han@notreal.com'
        age='25'
      />
      <ContactCard
        imgUrl='https://via.placeholder.com/150'
        name='Paul Jones'
        email='paul.jones@notreal.com'
        age='32'
      />
      <ContactCard
        imgUrl='https://via.placeholder.com/150'
        name='Peter Pan'
        email='peter.pan@neverland.com'
        age='100'
      />
    </div>
  );
};

export default App;
