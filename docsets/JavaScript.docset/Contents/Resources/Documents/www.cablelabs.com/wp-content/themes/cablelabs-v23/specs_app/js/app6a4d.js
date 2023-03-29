/* eslint-disable */

window.addEventListener('DOMContentLoaded', () => {
  var searchApp = angular.module('searchApp', [
    'ui.router',
    'searchControllers',
    'ngCookies',
    'ngclipboard'
  ]);

  searchApp.constant("settings",{
    "SITE_URL":window.location.protocol+'//'+window.location.hostname,
      "THEME_URL": 'https://specification-api.cablelabs.com',
  });

  searchApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'settings',
    function($stateProvider, $urlRouterProvider, $locationProvider, settings){
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/specifications/search');
      $stateProvider.
        state('home',{
          url: '/specifications/search',
          templateUrl: settings.SITE_URL+'/wp-content/themes/cablelabs-v23/specs_app/pages/search.html'
        }).
        state('spec',{
          url:'/specifications/:specId',
          templateUrl: settings.SITE_URL+'/wp-content/themes/cablelabs-v23/specs_app/pages/spec.html'
        }).
        state('spec_trail',{
          url:'/specifications/:specId/',
          templateUrl: settings.SITE_URL+'/wp-content/themes/cablelabs-v23/specs_app/pages/spec.html'
        })
    }
  ]);
  searchApp.filter('startFrom', function(){
    return function(input, start){
      start = +start;
      return input.slice(start);
    }
  });

  controllers();

  searchApp.service('PagerService',function($http, $q){
    return{
      getNumPages: function(url, query, category, subcategory, doctype, content, archives){
        var defer = $q.defer();
        $http.get(url+'/search', {cache:'true',params:{'query':query, 'category':category, 'subcategory':subcategory, 'doctype':doctype,'content':content,'archives':archives}}).success(function(data){
          defer.resolve(data);
        });
        return defer.promise;
      }
    }
  });

  searchApp.factory('GetSpecService', ['$http', '$q',
    function GetSpecService($http, $q){
      this.shared = null;

      var service = {
        specInfo: [],
        getSpecData: getSpecData
      };

      return service;


      function getSpecData(url,id, version){
        var def = $q.defer();
        $http.get(url+'/getSpec',{params:{'id':id,'version':version}})
          .success(function(data){
              data['current_page'] = window.location.href;
              service.specInfo = data;
              def.resolve(data);
          })
          .error(function(){
            def.reject("Failed to get Spec Info");
          });

        return $http({
          method:"GET",
          url:url+'/getSpec',
          params:{'id':id,'version':version}
        });
      };
    }
  ]);

  searchApp.directive('ngEnter', function () {
    return function (scope, element, attrs) {
          element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
            scope.$apply(function (){
                      scope.$eval(attrs.ngEnter);
                  });
                  event.preventDefault();
              }
          });
      };
  });
});
