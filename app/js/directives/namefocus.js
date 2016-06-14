'use strict';

eventsApp.directive('nameFocus', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch(attrs.nameFocus, function(value) {
        if(value === true) {
          element.focus();
        }
      });

    }
  };
});
