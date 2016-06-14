/**
 * Created by 0 on 5/4/2016.
 */
(function(){
    angular
        .module('mainApp')
        .controller('RegistrationController',
    function RegistrationController($scope, $mdDialog, $mdMedia) {
        var vm = this;

            $scope.user = {
                title: 'Developer',
                email: 'ipsum@lorem.com',
                firstName: '',
                lastName: '',
                company: 'Google',
                address: '1600 Amphitheatre Pkwy',
                city: 'Mountain View',
                state: 'CA',
                biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
                postalCode: '94043'
            };

//        $scope.status = '  ';
//        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

//        $scope.showAlert = function(ev) {
//            // Appending dialog to document.body to cover sidenav in docs app
//            // Modal dialogs should fully cover application
//            // to prevent interaction outside of dialog
//            $mdDialog.show(
//                $mdDialog.alert()
//                    .parent(angular.element(document.querySelector('#popupContainer')))
//                    .clickOutsideToClose(true)
//                    .title('This is an alert title')
//                    .textContent('You can specify some description text in here.')
//                    .ariaLabel('Alert Dialog Demo')
//                    .ok('Got it!')
//                    .targetEvent(ev)
//            );
//        };

//        $scope.showConfirm = function(ev) {
//            // Appending dialog to document.body to cover sidenav in docs app
//            var confirm = $mdDialog.confirm()
//                .title('Would you like to delete your debt?')
//                .textContent('All of the banks have agreed to forgive you your debts.')
//                .ariaLabel('Lucky day')
//                .targetEvent(ev)
//                .ok('Please do it!')
//                .cancel('Sounds like a scam');
//
//            $mdDialog.show(confirm).then(function() {
//                $scope.status = 'You decided to get rid of your debt.';
//            }, function() {
//                $scope.status = 'You decided to keep your debt.';
//            });
//        };

//        $scope.showAdvanced = function(ev) {
//            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
//
//            $mdDialog.show({
//                controller: DialogController,
//                templateUrl: 'dialog1.tmpl.html',
//                parent: angular.element(document.body),
//                targetEvent: ev,
//                clickOutsideToClose:true,
//                fullscreen: useFullScreen
//            })
//                .then(function(answer) {
//                    $scope.status = 'You said the information was "' + answer + '".';
//                }, function() {
//                    $scope.status = 'You cancelled the dialog.';
//                });



//            $scope.$watch(function() {
//                return $mdMedia('xs') || $mdMedia('sm');
//            }, function(wantsFullScreen) {
//                $scope.customFullscreen = (wantsFullScreen === true);
//            });
//
//        };

//        $scope.showTabDialog = function(ev) {
//            $mdDialog.show({
//                controller: DialogController,
//                templateUrl: 'tabDialog.tmpl.html',
//                parent: angular.element(document.body),
//                targetEvent: ev,
//                clickOutsideToClose:true
//            })
//                .then(function(answer) {
//                    $scope.status = 'You said the information was "' + answer + '".';
//                }, function() {
//                    $scope.status = 'You cancelled the dialog.';
//                });
//        };
    });

//
//    function DialogController($scope, $mdDialog) {
//        $scope.hide = function () {
//            $mdDialog.hide();
//        };
//
//        $scope.cancel = function () {
//            $mdDialog.cancel();
//        };
//
//        $scope.answer = function (answer) {
//            $mdDialog.hide(answer);
//        };
//
//    }


/**
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
 **/

})();