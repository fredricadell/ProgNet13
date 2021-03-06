var HomeController = (function () {
    function HomeController($http) {
        this.$http = $http;
        var _this = this;
        $http.get("/hotels/recentlyRated").success(function (data) {
            _this.hotels = data;
        });
    }
    HomeController.$inject = [
        "$http"
    ];
    return HomeController;
})();
angular.module("bandb", []).config([
    "$routeProvider", 
    function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "html/home.html",
            controller: HomeController,
            controllerAs: "dc"
        });
    }]);
