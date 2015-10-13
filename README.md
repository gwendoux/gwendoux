gwendoux.com -- personal website
--------------------------------

## How to install

   * copy config.json.default to config.json
   * added correct value to config
   * install node version as in package.json (via nvm if installed)
   * install all dependencies

    $ npm install

   * all scripts are availaible as followed

| script name | scripts called | pre | post | description |
|-------------|----------------|-----|------|-------------|
| lint        | grunt jshint   |     |      | run linting service |
| test        | grunt test     | lint |     | run mocha test and blanket code coverage |
| start       | node server    | lint |     | run server |
| start-watch | grunt start-watch |  |  | run server with nodemon watch |
| build       | grunt build |  |  | build front resources |
| build-watch | grunt build-watch |  |   | build and watch front resources |


# Todolist

* [ ] remove bootstrap
* [X] switched icon font to svg
* [ ] better build script
* [ ] better deployment script
* [ ] work on font performance
* [ ] use flexbox layout
* [ ] replace jshitn with eslint
* [ ] use css linter ?
