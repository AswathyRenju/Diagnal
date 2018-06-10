imageListApp.service('dataService', function($http){
    this.pageNumRequested=1;
    this.prevPageNumRequested=1;

    this.getData = function () {
      if(this.prevPageNumRequested  !== this.pageNumRequested){
       return $http.get("./api/CONTENTLISTINGPAGE-PAGE" + this.pageNumRequested + ".json");
      }
   
    }
});
