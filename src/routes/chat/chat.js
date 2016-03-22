

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import socket from 'angular-socket-io';

import template from './chat.template';
import controller from './chat.controller';
import chatService from './chat.service';
import ngAnimate from 'angular-animate';

let chatModule = angular.module('chat', [
            uiRouter,
            ngAnimate,
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
        .directive("scrollToTopWhen", function ($timeout) {
          return {
            restrict: 'A',
            link: function (scope, element, attrs) {
              scope.$on('socket:message', function () {
                  runScroll(angular.element(element)[0]);
             });
             function scrollTo(element, to, duration) {
                if (duration <= 0) return;
                var difference = to - element.scrollTop;
                var perTick = difference / duration * 10;

                setTimeout(function() {
                  element.scrollTop = element.scrollTop + perTick;
                  if (element.scrollTop == to) return;
                  scrollTo(element, to, duration - 10);
                }, 10);
              }
              function runScroll(element) {
                console.log(element.scrollTop + window.innerHeight, element.scrollTop , window.innerHeight);
                scrollTo(element, element.scrollTop + window.innerHeight + 200, 200);
              }
            }
          };
        })
        .directive('classOnEvent', function($state) {
          return {
            restrict: 'A',
            link: function (scope, element) {
              console.log(scope);
              console.log($state, 'state');
              scope.$on(scope.event, (ev, data) => {
                console.log('dupa');
                  if(!$state.is('app.chat')) {
                     element.addClass( scope.class );
                  }
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
