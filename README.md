# REACT DEMO WITH TYPESCRIPT
this is a repo to start learning react with typescript and webpack

## How to follow along
1. Clone the repository
2. npm install
3. npm run build 
4. run 'live-server' and you will see your app

## Step 2: 
We'll here by setting up a scoreboard view and then we'll build the base components to refactor the app. We are going add some features to dynamize the application.
To follow along, run *git checkout step2-1*

To see the final result *git checkout step2-2*


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
    <!--<script src="build/bundle.js"></script>-->
</body>
</html>
```

AND YOU RUN 
1. npm run build
2. live-server