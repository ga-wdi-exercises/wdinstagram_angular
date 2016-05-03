"use strict";

(function(){
  angular
    .module("wdinstagram")
    .controller("EntriesIndexCtrl", EntriesIndexCtrlFunc)

  EntriesIndexCtrlFunc.$inject = ["EntriesFactory"]
  function EntriesIndexCtrlFunc(EntriesFactory) {
    var indexVm = this;
    indexVm.entries = EntriesFactory.query();
    indexVm.newEntry = new EntriesFactory();

    indexVm.create = function() {
      indexVm.newEntry.$save().then(function(res) {
        indexVm.entries.push(res);
        indexVm.newEntry = new EntriesFactory();
      })
    }
  }

})();
