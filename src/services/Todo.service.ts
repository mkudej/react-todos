import { Todo } from "../interfaces/Todo";

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
            completed: false
        }];
    }

    public delete(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    public toggleTodoStatus(id: number) {
        this.todos = this.todos.map((todo) => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
    }
}