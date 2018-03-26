import * as angular from "angular"
import { Todo } from "./todo.component"
import { TodoService } from "./todo.service"

export const TodoModule = angular
    .module(Todo.Name, [])
    .component(Todo.Name, Todo.Component)
    .service(TodoService.Name, TodoService)
    .name