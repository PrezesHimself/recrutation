import angular from 'angular';
import uiRouter from 'angular-ui-router';

let settingsModule = angular.module('settings', [
            uiRouter
        ])

        .config(($stateProvider) => {
            console.log('config settings module');
                "ngInject";
            $stateProvider
            .state('app.settings', {
                url: 'settings',
                template: 'settings'
            });
        })


export default settingsModule;
