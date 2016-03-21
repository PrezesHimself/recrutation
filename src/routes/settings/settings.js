import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './settings.template';
import controller from './settings.controller';
import factory from './settings.factory';

let settingsModule = angular.module('settings', [
            uiRouter
        ])

        .config(($stateProvider) => {
            console.log('config settings module');
                "ngInject";
            $stateProvider
            .state('app.settings', {
                url: 'settings',
                template: template,
                controller: controller,
                controllerAs: 'vm',
            });
        })

        .service('SettingsFactroy', factory )


export default settingsModule;
