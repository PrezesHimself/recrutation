'use strict';

    class ChatController {

        constructor($scope, $rootScope, ChatService) {
            this.ChatService = ChatService;
            this.$scope = $scope;
            this.messages = ChatService.messages;
            this.input = "";
            this.$rootScope = $rootScope;
        }


        isMyMessage(msg) {
          return this.$rootScope.socketID == msg.socketID;
        }
        send() {
            this.sendMessage(this.input, 'user');
            this.input = "";
        }

        appendMessage(message, user) {
            this.ChatService.appendMessage(
                message,
                user
            );
        }

        sendMessage(message, user) {
            if(message) {
                this.ChatService.sendMessage(
                    message,
                    user
                )
            }
        }
    }

export default ChatController;
