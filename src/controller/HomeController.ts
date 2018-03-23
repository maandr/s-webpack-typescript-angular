export interface HomeControllerScope extends ng.IScope {
    names: Array<string>
}

export class HomeController {
    public static Name = "HomeController"

    static $inject = [
        "$scope"
    ]

    constructor(
        private $scope: HomeControllerScope
    ) {
        this.$scope.names = [ "John", "Mary", "Judy" ]
    }
}