"use strict";

(function(){
  angular
    .module("wdinstagram")
    .controller("EntriesShowCtrl", EntriesShowCtrlFunc)

  EntriesShowCtrlFunc.$inject = ["$stateParams", "$state", "EntriesFactory"]
  function EntriesShowCtrlFunc($stateParams, $state, EntriesFactory) {
    var showVm = this;
    showVm.entry = EntriesFactory.get({id: $stateParams.id});

    showVm.update = function() {
      showVm.entry.$update({id: $stateParams.id});
    };

    showVm.delete = function() {
      showVm.entry.$delete({id: $stateParams.id}).then(function() {
        $state.go("entriesIndex", {}, {reload: true});
      });
      // promise added to update the index view ith updated data
    }
  }

})();
