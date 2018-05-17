angular.module('site.controller', [])
    .controller('SiteCtrl', ['$scope','$http','Restangular','$state','$timeout','$location', '$anchorScroll',
        function ($scope, $http,Restangular,$state,$timeout, $location, $anchorScroll) {
            $scope.products= "Coral test";
            $scope.navClick = function(sectionId) {
                $location.hash(sectionId);
                // 调用 $anchorScroll()
                $anchorScroll();
            }
    }]);
