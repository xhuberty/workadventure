import {MenuScene} from "./MenuScene";

class MenuManager {
    private menuScene: MenuScene|null = null;
    private zone: Phaser.GameObjects.Zone|null = null;
    
    isOpened(): boolean {
        return this.menuScene !== null;
    }
    
    openMenu(scene: Phaser.Scene) {
        if (this.menuScene !== null) return;
        const handle = 'window1';

        this.zone = scene.add.zone(50, 50, 100, 100).setInteractive().setOrigin(0);
        this.menuScene = new MenuScene(handle, this.zone);
        scene.scene.add(handle, this.menuScene, true);
    }
    closeMenu(scene: Phaser.Scene) {
        if (this.menuScene === null || this.zone === null) return;
        const handle = 'window1';
        scene.scene.remove(handle);
        this.zone.destroy();
    }
}

export const menuManager = new MenuManager();