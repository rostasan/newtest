
    angular
        .module('mainApp', [
            'ngRoute',
            'ngMaterial',
            'ngAnimate',
            'ngMessages',
            'ngMdIcons',
            'material.svgAssetsCache',
            'menu',
            'ngCookies'
        ])

        .run(function(){
            console.log('***************  App is ready!!!!!!**************');
        });
