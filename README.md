This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Data API

https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query

### Query Parameters
    --------------- ** REQUIRED ** -------------------
    p       - Program (Show)
    --------------- GENERAL SEARCH -------------------
    q       - All-purpose query parameter
                * Title
                * Character
                * Tags
                * Guest Stars
    --------------- ADVANCED SEARCH ------------------
    id      - ID string (Exact match)
    e       - Episode index (Exact match)
    s       - Season (Exact match)
    n       - Episode number (across seasons)
    t       - Title (Contains)
    d       - Description aka Summary (Contains)
    c       - Character (Array contains)
    g       - Guest Star (Array contains)
    tags    - Tags (Array contains)
    --------------------------------------------------
    dd      - Date (Air date)
    mm      - Month (Air date)
    yy      - Year (Air date)
    --------------------------------------------------
    u       - Union type ('e' = match exact combination; 'a' = match any)
    
## Examples

* [King of the Hill, Season 1](https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?p=koth&s=1)
* [King of the Hill, Episodes featuring Chuck Mangione](https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?p=koth&g=Chuck%20Mangione)
* [King of the Hill, Episodes with a Title that contains 'of'](https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?p=koth&t=of)
* [King of the Hill, Episodes with a Title that contains 'of' -AND- originally aired in March](https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?p=koth&t=of&mm=03)
* [King of the Hill, Episodes with a Title that contains 'of' -OR- originally aired in March](https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?p=koth&t=of&mm=03&u=a)