import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './photos.template';
import controller from './photos.controller';

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
                element.addClass("mr-slider");

                var container = angular.element(element.find('div')[1]);
                var slides = element.find('img').length;
                var currentSlide = 0;
                var part = 100 ;

                console.log(container);

                scope.nextSlide = function () {


                      if(currentSlide === slides - 1) {
                        addPhoto();
                      }
                    currentSlide = Math.min(currentSlide+1, (slides-1));
                    console.log(currentSlide);
                    container.css('left', -currentSlide * part  + '%');
                }
                scope.prevSlide = function () {
                    currentSlide = Math.max(currentSlide-1, 0);
                    console.log(currentSlide);
                    container.css('left', -currentSlide * part + '%');
                }

                addPhoto();

                function addPhoto() {
                  slides++;
                    container.css('width', slides * 100  + '%');
                  console.log('add photo');
                  container.append('<div class="mr-slider__imgwrapper" style="background-image:url(http://lorempixel.com/400/200/?cache='+Math.round((Math.random()*200))+')"></div>');
                }
            }

            return {
                link: link,
                template: '<div class="mr-slider__wrapper" ng-swipe-left="nextSlide()" ng-swipe-right="prevSlide()">' +
                    '<div class="mr-slider__container"> ' +
                     '</div>' +
                '</div>'
            };
        }]);


export default photosModule;
