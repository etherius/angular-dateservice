/**
 * Created by kanagnos on 8/19/2016.
 */

describe('Date service' , function() {
    var serviceUT;

    beforeEach(angular.mock.module('Helpers'));
    beforeEach(inject(function(_DateService_) {
        serviceUT = _DateService_;
    }));

    it('should be defined' , function() {
        expect(serviceUT).toBeDefined();
    });

    it('should create a date' , function() {
        expect(serviceUT.CurrentDate()).toBeDefined();
    })
});