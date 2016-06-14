(function(angular, undefined){
    "use strict";
    angular
        .module('mainApp')
        .controller('AppController', AppController)
        .controller('DialogController', DialogController);

    function AppController($scope, $mdDialog) {
        var alert;

        $scope.registrationDialog = registrationDialog;

        function registrationDialog($event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl:'views/registration.html',

                controller: RegisterController
            });
            function DialogController($scope, $mdDialog) {

                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        }
    }


    function DialogController($scope, $mdDialog) {
        var alert;

        $scope.loginDialog = loginDialog;

        function loginDialog($event) {
            var parentEll = angular.element(document.body);
            $mdDialog.show({
                parent: parentEll,
                targetEvent: $event,
                templateUrl:'views/login.html',

                controller: DialogController
            });
            function DialogController($scope, $mdDialog) {

                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        }
    }
})(angular);
