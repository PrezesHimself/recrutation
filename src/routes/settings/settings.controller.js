'use strict';

class SettingsController {

    constructor($rootScope, SettingsFactroy) {
        this.settingsFactroy = SettingsFactroy;

        this.photoWidth = SettingsFactroy.photoWidth;
        this.photoHeight = SettingsFactroy.photoHeight;
        this.userName = SettingsFactroy.userName;

    }

    submit() {
        this.settingsFactroy.photoWidth = this.photoWidth;
        this.settingsFactroy.photoHeight = this.photoHeight;
        this.settingsFactroy.userName = this.userName;
        this.settingsFactroy.submit();
    }
}

export default SettingsController;

