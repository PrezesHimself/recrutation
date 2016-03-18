

import angular from 'angular';
import Chat from './chat/chat';
import Settings from './settings/settings';
import Photos from './photos/photos';

let routesModule = angular.module('app.routes', [
    Chat.name,
    Settings.name,
    Photos.name
]);

export default routesModule;
