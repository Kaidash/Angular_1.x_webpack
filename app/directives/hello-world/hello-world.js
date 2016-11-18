
/* @ngInject */
export default function helloWorld() {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: './directives/hello-world/hello-world.html',
        controllerAs: 'vm',
        controller: function () {
            const vm = this;

            vm.greeting = 'Hello Webpack';
        }
    }


}