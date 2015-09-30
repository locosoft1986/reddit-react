# node-react-template

A template that are pre-configured for making an application with all these tools:

* Node.js
* MongoDB
* React.js (ES6)
* React-router
* Bootstrap (react-bootstrap)
* Sass support

On top of all, it is already ready to be deployed to Openshift.

## Usage

All the source files are placed in the corresponding directory:

* scss: ```src/css/main.scss```
* jsx: ```src/jsx```
* database: ```database.js```

The scss will be auto-compile while the node server is running, while to compile .jsx on the go, run the following command:

```watchify src/jsx/App.jsx -t babelify --outfile public/bundle.js```
