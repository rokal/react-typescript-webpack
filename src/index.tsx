import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './components/Application';

let PLAYERS=[
  {
    name: "Roland",
    score:47,
    id: 1,
  },
  {
    name: "David",
    score: 35,
    id: 2,
  },
  {
    name: "Cohan",
    score: 42,
    id: 3,
  },
  {
    name: "Adrien",
    score:47,
    id: 1,
  },
  {
    name: "Maxime",
    score: 35,
    id: 2,
  },
  {
    name: "Jordan",
    score: 42,
    id: 3,
  },
  {
    name: "François",
    score: 35,
    id: 2,
  },
  {
    name: "Louis-Philippe",
    score: 42,
    id: 3,
  },
];

ReactDOM.render(
    <Application players = {PLAYERS} name ="Score Board" />,
    document.getElementById("container")
);