'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {

      $scope.event = $route.current.locals.event;

      $scope.upVoteSession = function(session) {
        session.upVoteCount++;
      };
      $scope.downVoteSession = function(session) {
        session.upVoteCount--;
      };

      $scope.scrollToSession = function() {
        $anchorScroll();
      };


    }
);
