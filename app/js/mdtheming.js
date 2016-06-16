/**
 * Created by 0 on 6/9/2016.
 */
(function(){
    angular
        .module('mainApp')
        .config(function($mdThemingProvider){
         $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('blue-grey')
            .warnPalette('grey')
            .backgroundPalette('grey');

//    var customPrimary = {
//        '50': '#737373',
//        '100': '#666666',
//        '200': '#595959',
//        '300': '#4d4d4d',
//        '400': '#404040',
//        '500': '#333',
//        '600': '#262626',
//        '700': '#1a1a1a',
//        '800': '#0d0d0d',
//        '900': '#000000',
//        'A100': '#808080',
//        'A200': '#8c8c8c',
//        'A400': '#999999',
//        'A700': '#000000'
//    };
//    $mdThemingProvider
//        .definePalette('customPrimary',
//        customPrimary);
//
//    var customAccent = {
//        '50': '#b3b3b3',
//        '100': '#bfbfbf',
//        '200': '#cccccc',
//        '300': '#d9d9d9',
//        '400': '#e6e6e6',
//        '500': '#f2f2f2',
//        '600': '#ffffff',
//        '700': '#ffffff',
//        '800': '#ffffff',
//        '900': '#ffffff',
//        'A100': '#ffffff',
//        'A200': '#fff',
//        'A400': '#f2f2f2',
//        'A700': '#ffffff'
//    };
//    $mdThemingProvider
//        .definePalette('customAccent',
//        customAccent);
//
//    var customWarn = {
//        '50': '#ffb280',
//        '100': '#ffa266',
//        '200': '#ff934d',
//        '300': '#ff8333',
//        '400': '#ff741a',
//        '500': '#ff6400',
//        '600': '#e65a00',
//        '700': '#cc5000',
//        '800': '#b34600',
//        '900': '#993c00',
//        'A100': '#ffc199',
//        'A200': '#ffd1b3',
//        'A400': '#ffe0cc',
//        'A700': '#803200'
//    };
//    $mdThemingProvider
//        .definePalette('customWarn',
//        customWarn);
//
//    var customBackground = {
//        '50': '#ffffff',
//        '100': '#ffffff',
//        '200': '#ffffff',
//        '300': '#ffffff',
//        '400': '#ffffff',
//        '500': '#ffffff',
//        '600': '#ffffff',
//        '700': '#ffffff',
//        '800': '#ffffff',
//        '900': '#ffffff',
//        'A100': '#ffffff',
//        'A200': '#ffffff',
//        'A400': '#ffffff',
//        'A700': '#ffffff'
//    };
//    $mdThemingProvider
//        .definePalette('customBackground',
//        customBackground);
//
//    $mdThemingProvider
//        .theme('default')
//        .primaryPalette('customPrimary')
//        .accentPalette('customAccent')
//        .warnPalette('customWarn')
//        .backgroundPalette('customBackground')
      });

})();