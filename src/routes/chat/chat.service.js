'use strict';

class ChatService {

    constructor(mySocket, $rootScope) {
        this.mySocket = mySocket;
        this.$rootScope = $rootScope;

        this.messages = [
            {
                message: "asd",
                user: "asdasd"
            }];


        window.test = this;

        this.$rootScope.$on('socket:message', (ev, data) =>{
            console.log(data);
            this.appendMessage(
                data.message,
                data.user
            )
        });
    }

    appendMessage(message, user) {
        this.messages.push({
            message: message,
            user: user
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