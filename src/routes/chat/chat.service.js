'use strict';

class ChatService {

    constructor(mySocket, $rootScope, $location) {
      console.log($rootScope);
        this.mySocket = mySocket;
        this.$rootScope = $rootScope;

        this.messages = [];


        window.test = this;

        this.$rootScope.$on('socket:greeting', (ev, data) =>{

          this.$rootScope.socketID = data.socketID;
          this.$rootScope.userName = data.newUserName;

        });
        this.$rootScope.$on('socket:message', (ev, data) =>{
            this.appendMessage(
                data
            );
            $location.hash('focus');

        });
    }

    appendMessage(data) {
        this.messages.push({
            message: data.message,
            user: data.user,
            socketID: data.socketID
        });
    }

    sendMessage(message, user) {
        this.mySocket.emit('message', {
            message: message,
            user: this.$rootScope.userName || 'guest'
        });
    }

}

export default ChatService;
