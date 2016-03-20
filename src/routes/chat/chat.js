

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import socket from 'angular-socket-io';



import io from 'socket.io-client/socket.io';


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
                template: 'chat <div><ul><li ng-repeat="phone in vm.phones">{{phone}}<p ng-bind-html-unsafe="phone.snippet"/></li></ul></div> <input ng-model="vm.message"/><button ng-click="vm.send()">test</button>',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
        })




    function HomeController(socketFactory, $scope) {

        var myIoSocket = io('http://localhost:1337');

        var mySocket = socketFactory({
            ioSocket: myIoSocket
        });

        mySocket.forward('news');
        mySocket.forward('news2');

        this.name = 'HomeController';
        this.test = 2;
        this.phones = ['test', 'test2'];

        this.send = () => {
            this.phones.push(this.message);
            mySocket.emit('news', { data: this.message });
            this.message = '';
        }

        $scope.$on('socket:news', (ev, data) => {
          // if(data.data) {        
              this.phones.push(data.data);
          // }
        });
    }

    angular.module('chat')
        .controller('HomeController', HomeController);

export default chatModule;

