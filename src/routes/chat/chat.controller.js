'use strict';

    class ChatController {

        constructor($scope, ChatService) {
            this.ChatService = ChatService;
            this.messages = ChatService.messages;
            this.input = "";
            $scope.onTouchend = function($event) {
                console.log('touchend event called');
            }
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

