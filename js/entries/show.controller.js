"use strict";

(function(){
  angular
    .module("wdinstagram")
    .controller("EntriesShowCtrl", EntriesShowCtrlFunc)

  EntriesShowCtrlFunc.$inject = ["$stateParams"]
  function EntriesShowCtrlFunc($stateParams) {
    var showVm = this;
    showVm.entry = dummyData[$stateParams.id]

    showVm.update = function() {
      dummyData[$stateParams.id] = showVm.entry;
    };

    showVm.delete = function() {
      dummyData.splice( $stateParams.id, 1 );
    }
  }

})();
