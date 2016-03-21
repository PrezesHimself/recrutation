import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './photos.template';
import controller from './photos.controller';
import directive from './photos.directive';

console.log(directive, '<<<<');

let photosModule = angular.module('photos', [
            uiRouter
        ])

        .config(($stateProvider) => {
            console.log('config photos module');
                "ngInject";
            $stateProvider
            .state('app.photos', {
                url: 'photos',
                template: template,
                controller: controller,
                controllerAs: 'vm',
            });
        })
        .directive('photos', ['$interval', function($interval) {

            function link(scope, element, attrs) {

                var container = angular.element(element.find('div')[1]);
                var slides = element.find('img').length;
                var currentSlide = 0;
                var part = 100 ;

                console.log(container);

                scope.nextSlide = function () {
                    currentSlide = currentSlide == slides ? slides : currentSlide+1;
                    console.log('next');
                    container.css('left', currentSlide * part  + '%');
                }
                scope.prevSlide = function () {
                    currentSlide = currentSlide == 0 ? 0 : currentSlide-1;
                    container.css('left', currentSlide * part + '%');
                }
            }

            return {
                link: link,
                template: '<div class="slide" ng-swipe-right="nextSlide()" ng-swipe-left="prevSlide()">' +
                    '<div class="container"> ' +
                        '<img src="http://i.imgur.com/IOebJDZ.gif" alt="">' +
                        '<img src="http://i.imgur.com/IOebJDZ.gif" alt="">' +
                        '<img src="http://i.imgur.com/IOebJDZ.gif" alt="">' +
                     '</div>' +
                '</div>'
            };
        }]);


export default photosModule;
