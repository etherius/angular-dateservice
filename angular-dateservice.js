/**
 * Created by kanagnos on 8/19/2016.
 */
'use strict'
angular.module('Helpers',[])
.service('DateService' , function() {
    this.CurrentDate = function() {
        return new Date();
    }
});