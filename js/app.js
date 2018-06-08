var myApp = angular.module('myApp', ['infinite-scroll']);
myApp.controller('ImageListController', function($scope, $http) {
   $scope.dataList=[];

   $scope.pageNumRequested=1;

    $scope.showSearchInp = true;

      $scope.showSearch = function () {
        $scope.showSearchInp = !$scope.showSearchInp;
      };
  
  $scope.loadMore = function() {
    if(!$scope.dataList.length || $scope.dataList.length !== $scope.totalRecordCount){    
    $http.get("./api/CONTENTLISTINGPAGE-PAGE" + $scope.pageNumRequested + ".json")
        .then(function (response) {
          $scope.pageTitle = response.data.page.title;
          $scope.totalRecordCount = parseInt(response.data.page['total-content-items'],10);
          $scope.totalPages=Math.ceil($scope.totalRecordCount/response.data.page['page-size-requested']);
          $scope.pageNumRequested++;          
          var data=response.data.page['content-items'].content;
          console.log(data.length);
          if($scope.dataList.length){
          $scope.dataList=$scope.dataList.concat(response.data.page["content-items"].content);
          }
        else{
          $scope.dataList=data;
        }
         console.log($scope.dataList.length);
        });
    }   
  };
});