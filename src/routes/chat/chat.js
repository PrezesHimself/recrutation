
var io = require('socket.io')();
console.log(io);

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import socket from 'angular-socket-io';



let chatModule = angular.module('chat', [
            uiRouter,
            'btford.socket-io',
        ])

        .config(($stateProvider) => {
            console.log('config chat module');
                "ngInject";
            $stateProvider
            .state('app.chat', {
                url: 'chat',
                template: 'chat {{vm.test}} <<',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
        })

    chatModule
        .factory('mySocket', function (socketFactory) {
            console.log(socketFactory);
        return socketFactory();
    })

    function HomeController(socketFactory) {

        //var myIoSocket = io.connect('/some/path');
        //
        //var socket = socketFactory(
        //    {
        //        ioSocket: myIoSocket
        //        }
        //);
        console.log(socket, 'test');
        this.name = 'HomeController';
        this.test = 2;
    }


    angular.module('chat')
        .controller('HomeController', HomeController);

export default chatModule;

