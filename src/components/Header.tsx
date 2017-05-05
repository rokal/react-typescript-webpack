import * as React from 'react'

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