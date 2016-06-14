(function(){
    angular
        .module('menu')
        .controller('MenuCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.toggleLeft = function () {
                $mdSidenav('left').toggle()
                    .then(function () {
                        $log.debug("toggle left is done");
                    });
            };

            $scope.showMenu = false;
            $scope.menuShowHide = function() {
                $scope.showMenu = !$scope.showMenu;

            }
})
            .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
                $scope.close = function () {
                    $mdSidenav('left').close()
                        .then(function () {
                            $log.debug("close LEFT is done");
                        });
                }
            });


})();
