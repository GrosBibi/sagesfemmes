'use strict';

require('chai').should();
var Office = require('../src/office');

describe("Office", function(){
  it("can add a patient", function(){
    var office = new Office();
    
    office.addPatient(new Patient());

    office.Patients.length.should.equal(1);
  });
}); 