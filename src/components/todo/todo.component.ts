import { TodoController } from "./todo.controller"
import { TodoService } from "./todo.service"

export class Todo {
    static Name: string = "todo"
    static Component: angular.IComponentOptions = {
        controller: TodoController,
        template: `
        <div class="todo">
            <todo-form todo="$ctrl.newTodo" on-add-todo="$ctrl.addTodo($event)">
                <todo-list todos="$ctrl.todos"></todo-list>
            </todo-form>
        </div>`,
    }
}