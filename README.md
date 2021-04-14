# React Bratus

## Structure

### packages/app

React.js application that displays component structure

### packages/cli

Cli tool to parse project and start react app

### packages/parser

Parser that builds data for the react app. Defaults to /src folder at the moment. Defaults to App component as root. Defaults to saving data at root_folder/.react-bratus/data.json.

Current limitations are that it does not consider styled-components nor components defined in external package. Furthermore, if a component is renamed through a default import then is not included either. Example in psudo code.

```
./Board/index.jsx:
export default ProjectBoard;

./index.jsx:
import Board from './Board';  
```

### packages/server

Simple express.js server that serves the react app + any data generated by the parser.

# TODOs

- Make config file .bratusrc
  - Set root folder
  - Define location of React app
  - Set folder for where to save data
  - Define root component name
  - Include and exclude filetypes using glob/regex syntax

## Test locally

Install yarn `npm install yarn`

Run `yarn install` to install dependencies

Build and symlink packages `yarn build`

Link cli to global packages `yarn link-cli`

Open a react project.
Run react-bratus -h to see help

Add `-l` or `--log` to see log output.

Run `react-bratus -c` to generate the data.

Run `react-bratus -s` to start the application. Open <http://localhost:3000> to see the visualisation.
