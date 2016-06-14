(function(){
angular
  .module('menu', [])
    .run(run)
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet("call", 'assets/iconsets/communication-icons.svg', 24)
            .iconSet("social", 'assets/iconsets/social-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    })

    .controller('MenuCtrl', function MenuCtrl($mdDialog) {

    })


        .config(config);
    function config($routeProvider) {
        $routeProvider
            .when('/bizarre', {
                templateUrl: 'views/partners/bizarre.html',
                conrtroller: 'BizarreController',
                controllerAs: 'vm'
            })
            .when('/event',{
                templateUrl: 'views/partners/event.html',
                controller: 'PartnersController',
                controllerAs: 'vm'
            })
            .when('/marketing',{
                templateUrl: 'views/partners/marketing.html',
                controller: 'MarketingController',
                controllerAs: 'vm'
            })
            .when('/sponsor', {
                templateUrl: 'views/partners/sponsor.html',
                controller: 'SponsorController',
                controlleras: 'vm'
            })
            .when('/vendor', {
                templateUrl: 'views/partners/vendor.html',
                controller: 'VendorController',
                controlleras: 'vm'
            })
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'views/login.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'views/register.html',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });

    }
    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        };

        // redirect that might not be used
//        $rootScope.$on('$locationChangeStart', function (event, next, current) {
//            // redirect to login page if not logged in and trying to access a restricted page
//            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
//            var loggedIn = $rootScope.globals.currentUser;
//            if (restrictedPage && !loggedIn) {
//                $location.path('/login');
//            }
//        });
    }
})();







/**
 * http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx
http://www.tutorialspoint.com/angular_material/angular_material_cards.htm
https://material.angularjs.org/latest/demo/menu'
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/
