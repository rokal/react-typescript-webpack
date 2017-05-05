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