(function() {
  'use strict';

  var Office = function(){
    Patients = [];
  };
  Office.prototype = {
    addPatient : function(patient){
      this.Patients.push(patient);
    }
  };


  module.exports = Office;
})();