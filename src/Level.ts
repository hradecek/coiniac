module Coiniac {

    export class Level extends Phaser.State {
        static readonly className = 'Level';

        static readonly COINS = [ Assets.TICKER_BTC.key, Assets.TICKER_ETH.key, Assets.TICKER_XRP.key ];

        maxCoins: number;
        maxSpeedFactor: number;
        minSpeedFactor: number;
        coins: Phaser.Group;

        init() {
            this.maxSpeedFactor = 500;
            this.minSpeedFactor = 300;
            this.maxCoins = 50;
            this.add.tileSprite(0, 0, this.world.width, this.world.height, 'background');
        }

        create() {
            this.coins = this.add.group();
            this.coins.enableBody = true;
            this.coins.physicsBodyType = Phaser.Physics.ARCADE;
            while (this.coins.length < this.maxCoins) {
                let randTicker = this.rnd.pick(Level.COINS);
                let coin = this.coins.create(Math.random() * this.world.width, 0, randTicker);

                coin.name = randTicker;
                coin.body.velocity.y = this.rnd.between(this.minSpeedFactor, this.maxSpeedFactor);

                let scale = this.rnd.realInRange(0.3, 0.8);
                coin.scale.setTo(scale, scale);

                coin.inputEnabled = true;
                coin.checkWorldBounds = true;
                coin.events.onOutOfBounds.add(this.coinOut, this);
                coin.events.onInputDown.add(this.click, this);
            }
        }

        update() {
        }

        click(coin: Phaser.Sprite) {
            let emitter = this.add.emitter(coin.x, coin.y, 4);
            emitter.makeParticles(coin.name);
            emitter.minParticleSpeed.setTo(-200, -300);
            emitter.maxParticleSpeed.setTo(200, -400);
            emitter.minParticleScale = 0.3 * (coin.body.width / 100.0);
            emitter.maxParticleScale = 0.3 * (coin.body.width / 100.0);
            coin.destroy();
            emitter.explode(0, 4);
        }

        coinOut(coin: any) {
            coin.reset(coin.x, 0);
            coin.body.velocity.y = 300 + Math.random() * 500;
        }
    }
}
