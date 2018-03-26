import * as angular from "angular"
import { TodoModule } from "./todo/todo.module"

export const ComponentsModule = angular
    .module("app.components", [
        TodoModule
    ])
    .name