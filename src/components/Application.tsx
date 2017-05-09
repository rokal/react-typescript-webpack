import * as React from 'react';
import Player from './Player';
import { PlayerProps } from './Player';
import Header from './Header';
import AddPlayerForm from './AddPlayerForm';


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
    addPlayer = (playerName:string)=>{
        this.state.players.push({
            score:0,
            name:playerName
        });
        this.setState(this.state);
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
            <AddPlayerForm onPlayerAdd = {this.addPlayer}/>
        </div>
    };
}
export default Application;