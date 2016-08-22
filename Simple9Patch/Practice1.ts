module WebSketch {

    //  9patchボタン
    export class Practice1 extends Phaser.State {
        back: Phaser.Sprite;
        label: Phaser.Text;
        group:Phaser.Group;

        btnOk: Button9P;
        btnCancel: Button9P;

        static loadContents(game: Phaser.Game) {
            game.load.spritesheet("button", "assets/btn60_60_3.png", 60, 60);
        }

        create() {
            //  背景親パネル
            this.back = this.game.add.sprite(0, 0, "white");
            this.back.tint = 0xffeeb9;

            this.label = this.game.add.text(0, 0, "simple 9 patch", {});

            this.group = this.game.add.group();
            this.group.position.set(this.game.world.centerX, this.game.world.centerY);

            //  ボタン

            this.btnOk = new Button9P(this.game, -100, -20, "button", 0, () => { this.btnPush1(); }, 1, 0, 2, 0);
            this.btnOk.text = "OK";
            this.group.add(this.btnOk);
            this.btnOk.width = 100;
            this.btnOk.height = 60;

            this.btnCancel = new Button9P(this.game, -10, -20, "button", 0, () => { this.btnPush2(); }, 1, 0, 2, 0);
            this.btnCancel.text = "Cancel";
            this.group.add(this.btnCancel);
            this.btnCancel.width = 130;
            this.btnCancel.height = 60;

            this.resize();


            //  5秒で遷移（これはナビゲータで管理すべきものだが）
            //this.game.time.events.add(Phaser.Timer.SECOND * 5, this.next, this);
        }

        btnPush1() {
            this.label.text = "OK!";
        }

        btnPush2() {
            this.label.text = "Cancel!";
        }

        update() {
        }

        resize() {
            //  背景リサイズ調整
            this.back.width = this.game.world.width;
            this.back.height = this.game.world.height;
            this.group.position.set(this.game.world.centerX, this.game.world.centerY);
        }

        shutdown() {
        }
    }

}  
