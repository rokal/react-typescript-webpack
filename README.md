# REACT DEMO WITH TYPESCRIPT
this is a repo to start learning react with typescript and webpack

## How to follow along
1. Clone the repository
2. `npm install`
3. `npm run build `
4. run `live-server` and you will see your app

## Step 3: Adding action on player score changes 
Now that we have our project splitted correctly, we are going to add some actions on the buttons.

### **Some theory**
The fact of have our app in the form of a set of reusable component is great for maintainability.  There are some best practices that come along with 
components. In every component, all the properties that can change should be in the state. But here, it is very important to define which of component is 
responsible of changing that state. If the attribute in the targetted component cannot be altered in that component, when some change occurs, an event is emitted to 
the upper (in the hierarchy) component to handle the changes.

To come back to our application, when the *increment* or *decrement* button is pressed in the *Counter* component of a player, an event is emitted in order to 
let the upper component, i.e *Player* component, to handle the operation.
The score is a part of the player attributes but a player has no state. That said, even the player is not responsible of holding the changes that occur on his score.
An event will also be emitted to the upper, i.e *Application* component to handle the changes. As far as the *Application* component holds the players list, it'll the 
one that will take care of incrementing and decrementing the player score.

An approach of solution is described below.

### Components update

***Application.tsx***
```typescript
import * as React from 'react';
import Player from './Player';
import { PlayerProps } from './Player';
import Header from './Header';


interface AppProps {
    name: string;
    players: any[];
}
class Application extends React.Component<AppProps, {}>{
    constructor(props:AppProps){
        super(props);
    }

    handleScoreChange(delta:number,index:number){
        this.props.players[index].score +=delta;
        this.setState(this.state)
    }

    render() {
        return <div className="scoreboard">
            <Header name={this.props.name} />
            <div className="players">
                {this.props.players
                    .map((p,index )=> 
                            <Player score={p.score} 
                                    name={p.name} 
                                    key={index} 
                                    onScoreChange ={(delta)=> this.handleScoreChange(delta,index)} 
                                    />
                        )
                }
            </div>
        </div>
    };
}
export default Application;
```

***Player.tsx***

```typescript

import * as React from 'react'
import Counter from './Counter';

export interface PlayerProps{
    score:number;
    name:string;
    onScoreChange(delta:number):void;
}

class Player extends React.Component<PlayerProps,{}>{
    onScoreChange(delta:number){}
    render() {
        return (
            <div className="player">
                    <div className="player-name">
                        {this.props.name}
                    </div>
                    <div className="player-score">
                        <Counter score = {this.props.score} onChange={(delta)=> this.onScoreChange(delta)} /> 
                    </div>
                </div>
        );
    }
}
export default Player;
```

***Counter.tsx***
```typescript
import * as React from 'react'

interface CounterProps {
    score: number
    onChange(delta:number):void;
}

class Counter extends React.Component<CounterProps,{}>{
    render() {
        return <div className="counter">
                    <button className="counter-action decrement" onClick={()=> this.props.onChange(-1)}> - </button>
                    <div className="counter-score">{this.props.score} </div>
                    <button className="counter-action increment" onClick ={()=>this.props.onChange(1)}> + </button>
                </div>
    }
}

export default Counter;
```

AND YOU RUN 
1. `npm run build`
2. `live-server`