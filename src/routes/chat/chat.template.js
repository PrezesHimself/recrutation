let template = `
<div class="mr-chatbox" scroll-to-top-when="socket:message">
    <div class="animate-repeat" ng-repeat="msg in vm.messages">
        <div class="mr-chatbox__message" ng-class="{'mr-chatbox__message--mine' : vm.isMyMessage(msg)}">
          <b ng-if="!vm.isMyMessage(msg)">{{msg.user}}</b>
          <p>
              {{msg.message}}
          </p>
        </div>
    </div>
</div>
<div class="mr-inputbox">
  <input type="text" ng-model="vm.input" ng-keyup="$event.keyCode == 13 && vm.send()" class="mr-inputbox__input">
  <button ng-click="vm.send()" class="mr-inputbox__button">send</button>
</div>
`;

export default template;
