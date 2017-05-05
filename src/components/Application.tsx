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