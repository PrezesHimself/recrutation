'use strict';

class PhotosController {

    constructor($scope, $rootScope) {
        console.log('asdf');
        $rootScope.photoWidth = 200;
        $rootScope.photoHeight = 200;
    }

    nextSlide($event) {
        console.log($event);
    }

    prevSlide($event) {
        console.log($event);
    }
}

export default PhotosController;
