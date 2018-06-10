imageListApp.service('dataService', function($http){
    this.pageNumRequested=1;
    this.prevPageNumRequested=0;

    this.getData = function () {
         this.prevPageNumRequested=this.pageNumRequested;
       return $http.get("./api/CONTENTLISTINGPAGE-PAGE" + this.pageNumRequested + ".json");   
    };
});
