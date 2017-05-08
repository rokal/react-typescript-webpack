# REACT DEMO WITH TYPESCRIPT
this is a repo to start learning react with typescript and webpack

## How to follow along
1. Clone the repository
2. `npm install`
3. `npm run build `
4. run `live-server` and you will see your app

## Step 4: Update Header component to show more details

In the header section of our app, the will show the number of player and the total score. 
There is nothing complicated here.

***HEADER.tsx***

```typescript
import * as React from 'react'

interface HeaderProps {
    name: string
    playersNumber: number;
    totalScore:number
}

class Header extends React.Component<HeaderProps, {}>{
    render() {
        return (
            <div className="header">
                <table className="stats">
                    <tbody>
                        <tr>
                            <td>Teams:</td>
                            <td>{this.props.playersNumber}</td>
                        </tr>
                        <tr>
                            <td>Total score:</td>
                            <td>{this.props.totalScore}</td>
                        </tr>
                    </tbody>
                </table>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Header;
```

I've also changed a little bit, the application component to provide the right values, i.e the number of person `players.length` and the total sum of 
the players score `players.map(p => p.score).reduce((cumul,nextScore) => cumul+nextScore)`

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
interface AppState{
     players: PlayerProps[];
}
class Application extends React.Component<AppProps, AppState>{
    constructor(props: AppProps) {
        super(props);
        this.state={
            players:this.props.players
        }
    }

    handleScoreChange(delta: number, index: number) {
        this.state.players[index].score += delta;
        this.setState(this.state)
    }

    render() {
        return <div className="scoreboard">
            <Header name={this.props.name}
                playersNumber={this.props.players.length}
                totalScore={this.props.players.map(p => p.score).reduce((prev, next) => prev + next)}
            />
            <div className="players">
                {this.props.players
                    .map((p, index) =>
                        <Player score={p.score}
                            name={p.name}
                            key={index}
                            onScoreChange={(delta) => this.handleScoreChange(delta, index)}
                        />
                    )
                }
            </div>
        </div>
    };
}
export default Application;
```

AND YOU RUN 
1. `npm run build`
2. `live-server`