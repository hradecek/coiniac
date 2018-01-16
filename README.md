# Coiniac
Cryptocurrency coin miner game. Catch your coins!

## Build
First of all install [NPM](https://www.npmjs.com/) dependencies with:
```
$ npm install
```

The whole project is glued by [Gulp](https://gulpjs.com/). Run default task:
```
$ gulp
```
The build task produce `bin/game.js` file, which is linked to `index.html`.

For more information see `gulpfile.js`.

### Minify & uglify
Run:
```
$ gulp minify
```
in order to uglify and minify the built file (`bin/game.js`).

### Watch changes
Run:
```
$ gulp watch
```
in order to listen for changes in typescript files under `src/` folder and automatical rebuild.

## Run
Run any HTTP server e.g.:
```
$ php -S localhost:8080
```

## Version
Version 1.0.0.
Built by HTML5 game framework [Phaser](https://phaser.io/).
