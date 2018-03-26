import { TodoItem } from "./todo.controller"

export class TodoService {
    static Name: string = "TodoService"
    static $inject: string[] = ["$http"]

    constructor(
        private $http: angular.IHttpService
    ) {}

    getTodos(): Promise<Array<TodoItem>> {
        return new Promise((resolve, reject) => {
            resolve([
                new TodoItem("clean kitchen", false),
                new TodoItem("empty trash bin", false),
                new TodoItem("feed cat", true)
            ])
        })
    }
}