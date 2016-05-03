"use strict";

(function(){
  angular
    .module("wdinstagram")
    .controller("EntriesIndexCtrl", EntriesIndexCtrlFunc)

  function EntriesIndexCtrlFunc() {
    var indexVm = this;
    indexVm.entries = dummyData;
    indexVm.newEntry = {};

    indexVm.create = function() {
      dummyData.push(indexVm.newEntry);
      indexVm.newEntry = {};
    }
  }

})();
