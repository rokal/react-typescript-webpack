import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './components/Application';
import {PlayerProps} from './components/Player';

let PLAYERS:PlayerProps[]=[
  {
    name: "Roland",
    score:47,
  },
  {
    name: "David",
    score: 35,
  },
  {
    name: "Cohan",
    score: 42,
  },
  {
    name: "Adrien",
    score:47,
  },
  {
    name: "Maxime",
    score: 35,
  },
  {
    name: "Jordan",
    score: 42,
  },
  {
    name: "François",
    score: 35,
  },
  {
    name: "Louis-Philippe",
    score: 42,
  },
];

ReactDOM.render(
    <Application players = {PLAYERS} name ="Score Board" />,
    document.getElementById("container")
);