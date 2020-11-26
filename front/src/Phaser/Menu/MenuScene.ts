import {TextField} from "../Components/TextField";

export class MenuScene extends Phaser.Scene {
    private parent: Phaser.GameObjects.Zone;
    private textField!: TextField;

    constructor(handle: any, parent: Phaser.GameObjects.Zone) {
        super(handle);
        this.parent = parent;
    }

    create() {
        this.cameras.main.setViewport(this.parent.x, this.parent.y, 100, 100);
        this.cameras.main.setBackgroundColor(0x0055aa);
        this.textField = new TextField(this, this.parent.x, this.parent.y, 'coucou')
    }
}