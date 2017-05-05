#REACT DEMO WITH TYPESCRIPT
This is a repo to start learning react with typescript and webpack.

The tutorial is organized into steps. ***You can switch the branches in ascending order to follow along***

## How to follow along
1. Clone the repository by running `git clone https://github.com/rokal/react-typescript-webpack.git `
2. `npm install`
3. `npm run build` 
4. run `live-server` and you will see your app

## Step 2: Our solution 
We separated our base template into four components:

1. The Application component which garther the whole elements.

***Application.tsx***
```typescript
import * as React from 'react';
import Player from './Player';
import { PlayerProps } from './Player';
import Header from './Header';


interface AppProps {
    name: string;
    players: PlayerProps[];
}
class Application extends React.Component<AppProps, {}>{
    render() {
        return <div className="scoreboard">
            <Header name={this.props.name} />
            <div className="players">
                {this.props.players.map((p,index )=> <Player score={p.score} name={p.name} key={index} />)}
            </div>
        </div>
    };
}
export default Application;
```
2. The Header component to show the title of the application of the application
***Header.tsx***
```typescript
interface HeaderProps {
    name: string
}

class Header extends React.Component<HeaderProps, {}>{
    render() {
        return <div className="header">
                    <h1>{this.props.name}</h1>
                </div>
    }
}

export default Header;
```
3. The Player component to show the informations about a given player. In those informations, we a last component described as:

***Player.tsx***

```typescript

import Counter from './Counter';

export interface PlayerProps{
    score:number;
    name:string;
}

class Player extends React.Component<PlayerProps,{}>{
    render() {
        return <div className="player">
                    <div className="player-name">
                        {this.props.name}
                    </div>
                    <div className="player-score">
                        <Counter score = {this.props.score} /> 
                    </div>
                </div>
    }
}
export default Player;
```

4. The Counter component which allow us to play (increment and decrement) with player score. It is embedded in the player component.

***Counter.tsx***
```typescript
import * as React from 'react'

interface CounterProps {
    score: number
}

class Counter extends React.Component<CounterProps,{}>{
    render() {
        return <div className="counter">
                    <button className="counter-action decrement" > - </button>
                    <div className="counter-score">{this.props.score} </div>
                    <button className="counter-action increment"> + </button>
                </div>
    }
}

export default Counter;
```

***index.html***

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="src/styles/app.css">
    <title>Our awesome app</title>
</head>

<body>
    <div id="container">
    </div>

    <script src="build/bundle.js"></script>
</body>

</html>
```

AND YOU RUN 
1. npm run build
2. live-server