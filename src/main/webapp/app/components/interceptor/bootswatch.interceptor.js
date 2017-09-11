(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .factory('BootswatchInterceptor', BootswatchInterceptor);

    function BootswatchInterceptor () {
        var service = {
            request: request
        };

        return service;

        function request(config) {
            config.headers = config.headers || {};
            // exclude bootswatch url
            if(config.url.indexOf('bootswatch.com/api') !== -1){
              
              delete config.headers.Authorization;
              
            }
            return config;
        }
    }
})();
