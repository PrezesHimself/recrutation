

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import socket from 'angular-socket-io';

import template from './chat.template';
import controller from './chat.controller';
import chatService from './chat.service';

console.log(chatService);

let chatModule = angular.module('chat', [
            uiRouter,
            'btford.socket-io',
        ])

        .config(($stateProvider) => {
            console.log('config chat module2');
                "ngInject";
            $stateProvider
            .state('app.chat', {
                url: 'chat',
                template: template,
                controller: controller,
                controllerAs: 'vm'
            });
        })
        .service('ChatService', chatService )
        .directive('classOnEvent', function() {
          return {
            restrict: 'A',
            link: function (scope, element) {
              console.log(scope);
              scope.$on(scope.event, (ev, data) => {
                 element.addClass( scope.class );
                });
              element.bind('click', function() {
                element.removeClass( scope.class );
              });
            },
            scope: {
                event: '@event',
                class: '@cl',
            }
          };
        });

export default chatModule;

