'use strict';

eventsApp.directive('sessionThumbnail', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/directives/sessionThumbnail.html',
    controller: 'EventController',
    scope: {
      session: "="
    }
  };
});
