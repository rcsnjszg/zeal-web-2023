/* eslint-disable */
function controllers() {
    var searchControllers = angular.module('searchControllers',[]);

    searchControllers.controller('SearchCtrl', ['$rootScope','$scope', '$http', '$location', 'PagerService', '$cookies', 'settings',
        /* Load initial data */
        function ($rootScope,$scope, $http, $location, PagerService, $cookies, settings){
            var resultsPerPage = 15;

            $scope.SITE_URL = settings.SITE_URL;
            $scope.THEME_URL = settings.THEME_URL;
            $rootScope.page = 'Search';
            $scope.sortBy = false;
            $scope.direction = ''; //sorting direction
            $scope.pages = new Array(1,2,3,4,5,6,7,8,9,10); //Just assuming that more than 100 results will be returned
            $scope.currentPage = 1;
            $scope.query = '';
            $scope.category = '';
            $scope.subcategory = '';
            $scope.doctype = '';
            $scope.resultsCheck = false;
            $scope.pluralToSingular = '';
            $scope.form = new SpecSearch();
            $scope.isSearchingContent = {
               value : 'false'
            };
            $scope.isSearchingArchives = {
                value : 'false'
            };
            $scope.copy_link_button = 'Copy Search Link';

            if ($location.search().currentPage)
                $scope.currentPage = parseInt($location.search().currentPage);
            if ($location.search().sortby)
                $scope.sortBy = $location.search().sortby;
            if ($location.search().order)
                $scope.direction = $location.search().order;
            if ($location.search().query)
                $scope.query = $location.search().query;
            if ($location.search().category)
                $scope.category = $location.search().category.toUpperCase();
            if ($location.search().subcat){
                $scope.subcategory = $location.search().subcat.toUpperCase();
            }
            if ($location.search().doctype)
                $scope.doctype = $location.search().doctype;
            $scope.isSearchingContent.value = ($location.search().content == 'true'?'true':'false');
            $scope.isSearchingArchives.value = ($location.search().archives == 'true'?'true':'false');

            // Breakpoint Listener
            var breakpoint="(min-width:1px)";
            breakpoint.addListener(formHandler);

            function formHandler(e){
                $scope.form.expandForm();
            }

            // This removes the min height of 100vh on the specifications search page if there are no results
            function removeMinHeight() {
                if (document.querySelector('.specs-search-results__list--no-results')) {
                    document.querySelector('.specs-app').classList.remove('specs-app--min-height-100vh');
                } else {
                    document.querySelector('.specs-app').classList.add('specs-app--min-height-100vh');
                }

                window.removeEventListener('load', removeMinHeightHandler);
            }
            var removeMinHeightHandler = function removeMinHeightHandler(e) {
                return removeMinHeight();
            }
            window.addEventListener('load', removeMinHeightHandler);

            function getNumResults(){
                PagerService.getNumPages(settings.THEME_URL, $scope.query, $scope.category, $scope.subcategory, $scope.doctype, $scope.isSearchingContent.value, $scope.isSearchingArchives.value).then(function(data){
                    $scope.numResults = data.numItems;
                    $scope.totalPages = Math.ceil(data.numItems/resultsPerPage);
                    $('.result_num').show();
                    getPagerControl();
                });
            }
            //Get categories
            $http.get(settings.THEME_URL+'/categories').success(function(data){
                $scope.specsCategories = data;
                $scope.subcategories = getSubcategories($scope.specsCategories, $scope.category);
            });

            function getSubcategories(array, category){
              for (var i = 0; i < array.length; i++){
                if (array[i].value === category)
                  return array[i].subcats;
              }
              return false;
            }

            $scope.search = function(){
                $location.search('query',$scope.query);
                $location.search('category', $scope.category);
                $location.search('subcat', $scope.subcategory);
                $location.search('doctype', $scope.doctype);
                $location.search('content', $scope.isSearchingContent.value);
                $location.search('archives', $scope.isSearchingArchives.value);
                $scope.copy_link_button = 'Copy Search Link';
                $('#spinner').show();
                $('#specresults').fadeTo(400, .2);
                getNumResults();
                $http.get(settings.THEME_URL+'/search',{params:{'currentPage':$scope.currentPage,'sortby':$scope.sortBy,'order':$scope.direction, 'query':$scope.query, 'category':$scope.category, 'subcategory':$scope.subcategory, 'doctype':$scope.doctype,'content':$scope.isSearchingContent.value, 'archives':$scope.isSearchingArchives.value}}).success(function(data){
                    $scope.searchResults = data.results;
                    $('#spinner').fadeOut("slow");
                    $('#specresults').fadeIn(800).fadeTo(400,"1");
                    $cookies.put('lastSearch', $location.url());
                });

                $scope.form.initialize()
                $scope.pluralToSingular = setInterval(stripLastCharOfSpecsTypeTooltip, 500);
            }

            // Strips the last character of the specifications document type if it's an 's'
            // This makes the tooltip verbiage for the document type singular
            function stripLastCharOfSpecsTypeTooltip(){
                // Checks to see if it exists first
                if (document.querySelector('[data-specs-type-tooltip]')) {
                    document.querySelectorAll('[data-specs-type-tooltip]').forEach(function(tooltip) {
                        var text = tooltip.dataset.tooltip;
                        // If it's plural, remove the s
                        if (text.charAt(text.length - 1) === 's') text = text.substring(0, text.length - 1);
                        tooltip.dataset.tooltip = text;
                    });
                    // Stop the interval function once all doc types have been checked
                    clearInterval($scope.pluralToSingular);
                }
            }

            $scope.changeCategory = function(cat){
                $scope.category = cat;
                $scope.currentPage = 1;
                $location.search('currentPage',1);
                $scope.subcategories = getSubcategories($scope.specsCategories, $scope.category);
                $scope.search();
            }
            $scope.changeSubcategory = function(subcat){
                $scope.subcategry = subcat;
                $scope.currentPage = 1;
                $location.search('currentPage',1);
                $scope.search();
            }
            $scope.changeDoctype = function(doctype){
                $scope.doctype = doctype;
                $scope.currentPage = 1;
                $location.search('currentPage',1);
                $scope.search();
            }
            $scope.changeQuery = function(q){
                if (window.matchMedia('(max-width: ' + break1 + ')').matches){
                    $scope.form.toggleForm();
                }
                $scope.query = q;
                $scope.currentPage = 1;
                $location.search('currentPage', 1);
                $scope.search();
            }
            $scope.searchFileContent = function(q){
                $scope.query = q;
                $scope.currentPage = 1;
                $location.search('currentPage', 1);
                $scope.search();
            }
            $scope.searchArchives = function(q){
                $scope.query = q;
                $scope.currentPage = 1;
                $location.search('currentPage', 1);
                $scope.search();
            }
            $scope.search();
            function getPagerControl(){
                $scope.pages = [];
                var start = Math.max($scope.currentPage-5,1);
            }
            function setPage(page){
                $('#spinner').show();
                $scope.currentPage = page;
                $location.search({
                    currentPage:$scope.currentPage,
                    sortby:$scope.sortBy,
                    order:$scope.direction,
                    query:$scope.query,
                    category:$scope.category,
                    subcat:$scope.subcategory,
                    doctype:$scope.doctype,
                    content:$scope.isSearchingContent.value,
                    archives:$scope.isSearchingArchives.value
                });
                $scope.search();
                getPagerControl();
            }
            $scope.orderBy = function($event, sortBy){
                if ($scope.direction === 'asc'){
                    $scope.direction = 'desc';
                } else{
                    $scope.direction = 'asc';
                }
                $scope.sortBy = sortBy;
                setPage($scope.currentPage);
            }
            $scope.setPage = setPage;

            function animateCheckMark(toolSelector, iconSelector){
                var tool = document.querySelector(toolSelector);
                var toolIcon = tool.querySelector(iconSelector);
                var checkIcon = tool.querySelector('.specs__icon--checkmark');

                toolIcon.classList.add('specs__icon--hidden');

                setTimeout(function() {
                    checkIcon.classList.remove('specs__icon--hidden');
                }, 150);

                setTimeout(function() {
                    checkIcon.classList.add('specs__icon--hidden');
                }, 1150);

                setTimeout(function(){
                    toolIcon.classList.remove('specs__icon--hidden');
                }, 1300);
            }

            $scope.resetFields = function(){
                animateCheckMark('[data-specs-search="reset-tool"]', '.specs__icon--reset');

                $scope.currentPage = 1;
                $scope.query = '';
                $scope.category = '';
                $scope.subcategory = '';
                $scope.doctype = '';
                $scope.isSearchingContent = {
                   value : 'false'
                };
                $scope.isSearchingArchives = {
                    value : 'false'
                };
                setPage(1);
            }

            $scope.toSpecPage = function($event){
                $('.ng-spec-search').fadeOut(500);
            }
            $scope.copyLink = function(){
                animateCheckMark('[data-specs-search="clipboard-tool"]', '.specs__icon--clipboard');
            }
            $scope.copyLinkURL = function(){
                return $location.absUrl();
            }
        }
    ]);

    searchControllers.controller('DoctypeCtrl', ['$scope', '$http', 'settings',
        function ($scope,$http, settings){
            $http.get(settings.THEME_URL+'/doctypes').success(function(data){
                $scope.specsDoctypes = data;
            });
        }
    ]);
    searchControllers.controller('SpecController', ['$scope', '$http', '$stateParams', '$rootScope', '$location', '$cookies', 'GetSpecService', 'settings',
        function($scope, $http, $stateParams, $rootScope, $location, $cookies, GetSpecService, settings){
            $rootScope.page = 'Spec';
            $scope.THEME_URL = settings.THEME_URL;
            $scope.spec = false;
            $scope.version = '';
            $scope.form = new SpecSearch();
            if ($location.search().v)
                $scope.version = $location.search().v;
            $scope.lastsearch = $cookies.get('lastSearch');
            $scope.statechange = false;
            $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams){
                $scope.statechange = true;
            });
            $('#spinner').show();
            $scope.docId = $stateParams.specId;
            $scope.getSpec = function(){
                $scope.data = GetSpecService.getSpecData(settings.THEME_URL, $scope.docId,$location.search().v )
                    .then(function(data){
                        if (data.data.numItems > 0){
                            window.scrollTo({ top: 0});
                            $scope.spec = data.data.results[0].succinctProperties;
                            $('.specs-page').fadeIn(1000);
                        }
                        else
                            $('#spec_details_not_found').fadeIn(1000);
                        $('#spinner').fadeOut("fast");
                    },
                    function(data){
                        console.log('Spec retrieval failed');
                    });
            }
            $scope.backToResults = function(){
                backToResultsFlag = true;
                $('#spec_details').fadeOut(500);
            }
            $scope.getSpec();
            $scope.getDocVersion = function(version){
                $scope.version = version;
                $location.search('v',version);
                $scope.getSpec();
            }
        }
    ]);
}
