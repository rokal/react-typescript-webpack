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