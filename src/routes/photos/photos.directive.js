'use strict';

class PhotosDirective {
    /*@ngInject*/
    constructor($timeout) {
        this.template = '<div ng-swipe-right="nextSlide()" ng-swipe-left="prevSlide()">I\'m a directive!</div>';
        this.restrict = 'EC';
        this.scope = {}
        // etc. for the usual config options

        // allows us to use the injected dependencies
        // elsewhere in the directive (e.g. compile or link function)
        console.log($interval);
        this.$interval = $interval;
    }
    //
    //// optional compile function
    //compile(tElement) {
    //    console.log('compile');
    //    tElement.css('position', 'absolute');
    //    this.move(tElement);
    //}

    // optional link function
    link(scope, element, attrs, ctrl) {
        console.log('link');
        this.$interval(() => this.move(element), 1000);
    }

    move(element) {
        console.log('move');
        element.css('left', 100 + 'px');
        element.css('top', 100 + 'px');
    }
}

PhotosDirective.$Inject = ['$interval'];

export default PhotosDirective