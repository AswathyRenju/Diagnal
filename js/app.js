var imageListApp = angular.module('imageListApp', ['infinite-scroll']);
imageListApp.controller('ImageListController', function ($scope, dataService) {
  $scope.dataList = [];
  $scope.showSearchInp = true;
  $scope.totalRecordCount = -1;

  $scope.showSearch = function () {
    $scope.showSearchInp = !$scope.showSearchInp;
  };

  $scope.loadMore = function () {
  console.log(dataService.pageNumRequested);
    if ($scope.totalRecordCount === -1 || $scope.dataList.length < $scope.totalRecordCount) {
      dataService.getData()
        .success(function (response) {
          $scope.pageTitle = response.page.title;
          $scope.totalRecordCount = parseInt(response.page['total-content-items'], 10);
        console.log('next request ' + dataService.pageNumRequested);
          dataService.pageNumRequested++;
         console.log('next request ' + dataService.pageNumRequested);
          var data = response.page['content-items'].content;
          if ($scope.dataList.length) {
            $scope.dataList = $scope.dataList.concat(response.page["content-items"].content);
          }
          else {
            $scope.dataList = data;
          }
       // console.log( $scope.dataList.length);
        })
        .error(function (error) {
          $scope.status = 'Unable to load image data: ' + error.message;
        });
    }
   
  };
});
