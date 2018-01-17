module Coiniac {

    export class Preloader extends Phaser.State {
        static readonly className = 'Preloader';

        preloadBar: Phaser.Sprite;

        preload() {
            this.setPreloadBar();
            this.loadAssets();
        }

        setPreloadBar() {
            const loaderBar = this.game.cache.getImage(Assets.IMG_PRELOADER_BAR.key);
            this.preloadBar = this.add.sprite(
                this.world.centerX - loaderBar.width/2.0,
                this.world.centerY - loaderBar.height/2.0,
                Assets.IMG_PRELOADER_BAR.key);
            this.load.setPreloadSprite(this.preloadBar);
        }

        loadAssets() {
            this.load.spritesheet(Assets.TICKER_BTC.key, Assets.TICKER_BTC.path, 128, 128);
            this.load.spritesheet(Assets.TICKER_ETH.key, Assets.TICKER_ETH.path, 128, 128);
            this.load.spritesheet(Assets.TICKER_XRP.key, Assets.TICKER_XRP.path, 128, 128);
            this.load.image('background', 'assets/btc_background.jpg');
        }

        create() {
            this.game.state.start(Level.className);
        }
    }
}
