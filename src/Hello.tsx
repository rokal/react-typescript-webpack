import * as React from 'react'

interface HelloProps{
    name:string
}

class Hello extends React.Component<HelloProps,{}>{
    render(){
        return <div> <h2>Hello , {this.props.name}</h2> </div>;
    }
}

export default Hello;