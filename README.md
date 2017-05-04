# REACT DEMO WITH TYPESCRIPT
this is a repo to start learning react with typescript and webpack

## How to follow along
1. Clone the repository
2. npm install
3. npm run build 
4. run 'live-server' and you will see your app

## Step 1: Getting hello-world working
The goal here is to launch hello world app well configured with typescript, react, and webpack.
We first create *src* and *build* directories to store our source code and bundled files

### Project dependancies
1. **Prod dependancies :**

..* **react and react-dom**.
As long as this demo file is about getting started with react, we should have them as production dependancies 
Just run 'npm install --save react react-dom'

2. **Dev dependancies.**

..* **Typescript**
To leverage types in javascript introduced in typescript. We'll be using JSX in conjonction with typescript. To learn more about it, [Click here](https://basarat.gitbooks.io/typescript/docs/jsx/tsx.html).


..* **Webpack**.
To have a powerful build system. The goal is to configure all the transpilations steps, file loaders and plugins to bundle our app files

..* **Typings** 
... Aiming to manage typescript definitions. It is very useful as far as we want to enhance our javascript development experience with types. 

### ** Set up webpack (webpack.config.js)**
```javascript
var path = require("path");

var config = {
  /*
   * The application entry file(s)
   */
  entry: ["./src/app.tsx"],

  /*
   * Specify the output bundled file
   */
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  /*
  * Files extensions we need to require in our code
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    /*
     * mmodules that process our files based on their extension.
     * test: check whether a condition is met
     * loader: the name of the module that will process the the file
     * exclude : exclude the files in a certain directory
     */
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;

```

### ** Set up typescript (tsconfig.json)  and install types definition**
Here we have the complete typescript configuration that we'll be using.
``` javascript
{
  "compilerOptions": {
    "jsx": "react",
    "module": "commonjs",
    "noImplicitAny": true,
    "outDir": "./build/",
    "preserveConstEnums": true,
    "removeComments": true,
    "target": "ES5"
  },
  "exclude": [
    "node_modules",
    "typings/browser.d.ts",
    "typings/browser"
  ]
}
```

To install types definition, we will use *typings*, the dependancy we've introduced lastly.
Here is the command we need to execute : 
``` bash
typings install react react-dom
```

### HERE WE GO !!!
In our *src* directory, we are will create the needed components. 

***Hello.tsx***
```typescript
import * as React from 'react'

interface HelloProps{
    name:string
}

class Hello extends React.Component<HelloProps,{}>{
    render(){
        return <div> <h2>{this.props.name}</h2> </div>;
    }
}

export default Hello;
```

***App.tsx***
```typescript
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from './Hello'

ReactDOM.render(
    <Hello name =" <Your name here>" />,
    document.getElementById("root")
);
```
***index.html***

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Our awesome app</title>
</head>
<body>
    <!--This is where our application will be in the dom-->
    <div id="root"></div>
    <!--This is bundled file we've build-->
    <script src="build/bundle.js"></script>
</body>
</html>
```

AND YOU RUN 
1. npm run build
2. live-server