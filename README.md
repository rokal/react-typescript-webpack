#REACT DEMO WITH TYPESCRIPT
This is a repo to start learning react with typescript and webpack.

The tutorial is organized into steps. ***You can switch the branches in ascending order to follow along***

## How to run your app
1. Clone the repository by running `git clone https://github.com/rokal/react-typescript-webpack.git `
2. `npm install`
3. `npm run build` 
4. run `live-server` and you will see your app

## Step 1: Configuration of scoreboard
Now that we have our helloworld app working properly, we are going to jump on a real world project: Score board application 
### HOW TO FOLLOW ALONG ?
1. *git checkout step2-1* to get the beginning of the step.
2. *git checkout step2-2* to see the final result
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
1. `npm run build`
2. `live-server`

## BIG THANKS TO [Willson Mock](http://willsonmock.com)
