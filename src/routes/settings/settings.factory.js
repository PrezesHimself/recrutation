'use strict';

class SettingsFactroy {

    constructor($rootScope) {
        this.photoWidth = 640;
        this.photoHeight = 480;
        this.userName = "userName";

        this.$rootScope = $rootScope;
    }

    submit() {
        this.$rootScope.photoWidth = this.photoWidth;
        this.$rootScope.photoHeight = this.photoHeight;
        this.$rootScope.userName = this.userName;
    }
}

export default SettingsFactroy;
