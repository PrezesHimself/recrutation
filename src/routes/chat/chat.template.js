let template = `
    <h2> Chat </h2>


    <input type="text" ng-model="vm.input" ng-keyup="$event.keyCode == 13 && vm.send()">
    <button ng-click="vm.send()">send</button>

    <div ng-repeat="msg in vm.messages">
        <b>{{msg.user}}</b>
        <p>
            {{msg.message}}
        </p>
    </div>
`;

export default template;