import angular from 'angular';
import uiRouter from 'angular-ui-router';

let photosModule = angular.module('photos', [
            uiRouter
        ])

        .config(($stateProvider) => {
            console.log('config photos module');
                "ngInject";
            $stateProvider
            .state('app.photos', {
                url: 'photos',
                template: 'photos'
            });
        })


export default photosModule;
