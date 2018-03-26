import * as angular from "angular"
import uiRouter from "angular-ui-router"
import { Application } from "./application"
import { ComponentsModule } from "./components/components.module"
import { CommonModule } from "./common/common.module"

import "html-loader!./index.html"
import "./assets/scss/main.scss"

const root = angular
    .module("angular-starter", [
        ComponentsModule,
        CommonModule,
        uiRouter
    ])
    .component(Application.Name, Application.Component)
    .name

export default root;