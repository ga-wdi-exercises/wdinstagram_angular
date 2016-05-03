"use strict";

(function(){
  angular
    .module("wdinstagram", [
      "ui.router"
    ])
    .config([
      "$stateProvider",
      RouterFunc
    ])
    
    function RouterFunc($stateProvider) {
      $stateProvider
        .state("entriesIndex", {
          url: "/entries",
          templateUrl: "js/entries/index.html",
          controller: "EntriesIndexCtrl",
          controllerAs: "indexVm"
        })
        .state("entryShow", {
          url: "entryies/:id",
          templateUrl: "js/entries/show.html",
          controller: "EntriesShowCtrl",
          controllerAs: "showVm"
        })
    }

})();
