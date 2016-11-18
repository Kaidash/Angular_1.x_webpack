import angular from 'angular';
import helloWorld from './directives/hello-world/hello-world';

const ngModule = angular.module('app',[]);
ngModule.directive('helloWorld', helloWorld);




