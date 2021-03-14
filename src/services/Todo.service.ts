import { Todo } from "../interfaces/Todo";
import { TodoStatus } from "../interfaces/TodoStatus";

export class TodoService {
    private todos: Todo[] = [];

    public get() {
        return this.todos;
    }

    public add(title: string) {
        const id = new Date().getTime();
        this.todos = [...this.todos, {
            id,
            title,
            status: TodoStatus.NOT_COMPLETED
        }];
    }

    public delete(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    public toggleTodoStatus(id: number) {
        this.todos = this.todos.map((todo) => {
            if(todo.id === id){
                const status = todo.status === TodoStatus.COMPLETED ? TodoStatus.NOT_COMPLETED : TodoStatus.COMPLETED;
                return {...todo, status};
            }
            return todo;
        });
    }
}