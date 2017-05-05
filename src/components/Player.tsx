import * as React from 'react'
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