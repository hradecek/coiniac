module Coiniac {

    export class Bootstrap extends Phaser.State {

        static readonly className = 'Bootstrap';

        init() {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            if (this.game.device.desktop) {
                this.game.scale.pageAlignHorizontally = true;
                this.game.scale.pageAlignVertically = true;
            }
            else {
                this.scale.setMinMax(480, 260, 1024, 768);
                this.scale.forceLandscape = true;
                this.scale.pageAlignHorizontally = true;
            }
        }

        preload() {
            this.load.image(Assets.IMG_PRELOADER_BAR.key, Assets.IMG_PRELOADER_BAR.path);
        }

        create() {
            this.game.state.start(Preloader.className);
        }
    }
}
