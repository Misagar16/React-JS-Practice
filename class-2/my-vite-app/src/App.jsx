// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// App.jsx
import './App.css'
import Mycomponent from './Component/MyComponent'
import DisplayData from './Component/DisplayData'
import Conditional from './Component/Conditional';
import Button from './Component/Buttoncomp';
function App() {
  const fruits = ["Apple", "Banana", "Mango", "Cherry", "Gerua"];
  const person = {
    name: "Sagar Misal",
    age: 25
  };
  const isLogging = true;

  return (
    <>
      <h1>Hello React</h1>
      <Mycomponent message="Hello I am a component 1" />
      <DisplayData fruits={fruits} person={person} />
      <Conditional isLogging={isLogging} username={person.name}/>
      <Button/>

    </>
  );
}

export default App;

