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

AND YOU RUN 
1. `npm run build`
2. `live-server`