import { TodoService } from "./todo.service"

export class TodoController {
    static $inject: string[] = ["TodoService"]
    todos: TodoItem[]
    newTodo: TodoItem

    constructor(private service: TodoService) {}

    $onInit() {
        this.newTodo = this.getBlankTodo()
        this.todos = []
        this.service.getTodos()
            .then(response => this.todos = response)
    }

    addTodo({ todo }) {
        if(!todo) return
        this.todos.unshift(todo)
        this.newTodo = this.getBlankTodo()
    }

    private getBlankTodo(): TodoItem {
        return new TodoItem("", false)
    }
}

export class TodoItem {
    constructor(
        public title: string,
        public done: boolean
    ) {}
}