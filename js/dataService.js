imageListApp.service('dataService', function($http){
    this.pageNumRequested=1;
    this.prevPage=0;

    this.getData = function () {
    return $http.get("./api/CONTENTLISTINGPAGE-PAGE" + this.pageNumRequested + ".json");
    }
});
