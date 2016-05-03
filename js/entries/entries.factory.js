"use strict";

(function(){
  angular
    .module("wdinstagram")
    .factory("EntriesFactory", EntriesFactoryFunc)

  EntriesFactoryFunc.$inject = ["$resource"]
  function EntriesFactoryFunc($resource) {
    return $resource("http://localhost:3000/entries/:id", {}, {
      update: {method: "PUT"}
    });
  }

})();
