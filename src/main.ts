import * as angular from "angular"
import "angular-animate"
import "angular-moment"
import "angular-resource"
import "angular-sanitize"
import "angular-toarrayfilter"
import "angular-ui-router"

import "html-loader!./index.html"

import "./assets/scss/main.scss"

export let app = angular.module("demoApp", [
    "ngResource",
    "angularMoment",
    "angular-toArrayFilter"
])

console.log("Loaded App", app)