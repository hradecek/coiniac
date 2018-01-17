module Coiniac {

    export class Game extends Phaser.Game {
        static readonly HTML_ID = 'game-area';
        static readonly WIDTH= window.innerWidth * window.devicePixelRatio;
        static readonly HEIGHT = window.innerHeight * window.devicePixelRatio;

        constructor() {
            super(Game.WIDTH, Game.HEIGHT, Phaser.AUTO, Game.HTML_ID, null);

            this.state.add(Bootstrap.className, Bootstrap, false);
            this.state.add(Preloader.className, Preloader, false);
            this.state.add(Level.className, Level, false);

            this.state.start(Bootstrap.className);
        }
    }
}
