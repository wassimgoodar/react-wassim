import React from "react";
import Instruction from "./Instruction";
import SubmitButtom from "./SubmitButton";
import List from "./List";


import "./style.css";

export default function App() {

  const contacts = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];
  return (
    <div>
      <Instruction />
      <SubmitButtom />
      <List/>
    </div>
  );
}
