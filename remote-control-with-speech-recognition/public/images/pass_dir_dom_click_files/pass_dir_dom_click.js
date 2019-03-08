var app = angular.module('myApp', []);

app.controller('parentController', ['$scope', function($scope) {
    // $scope.pwd = {
    //     pass: ''
    // };
}]);

app.directive('divDirective', ['$document', function() {
    return {
        restrict: 'E',
        template: '<div class="outer" style="background-color:lightblue; width:300px; height:300px"><div class="middle" style="background-color:red; width:200px; margin-left:47px; margin-top: 32px; height:200px"><div class="inner" style="background-color:yellow; width:100px; margin-left:50px; margin-top: 28px; height:100px"></div></div></div><div class="message">message</div>',
        link: function(scope, element, attr) {
            var divEventOuter = element[0].querySelector(".outer");
            var divEventMiddle = element[0].querySelector(".middle");
            var divEventInner = element[0].querySelector(".inner");

            angular.element(divEventOuter).on('click', function() {
                // console.log("Outer div is clicked");
                var outerDiv = element[0].querySelector(".message");
                outerDiv.innerHTML = 'Outer div is clicked';
                if (!e) var e = window.event;
                // e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation();
            });
            angular.element(divEventMiddle).on('click', function() {
                // console.log("Middle div is clicked");
                var outerDiv = element[0].querySelector(".message");
                outerDiv.innerHTML = 'Middle div is clicked';
                if (!e) var e = window.event;
                // e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation();
            });
            angular.element(divEventInner).on('click', function() {
                // console.log("Inner div is clicked");
                var outerDiv = element[0].querySelector(".message");
                outerDiv.innerHTML = 'Inner div is clicked';
                if (!e) var e = window.event;
                // e.cancelBubble = true;
                if (e.stopPropagation) e.stopPropagation();
            });
        }
    }
}])