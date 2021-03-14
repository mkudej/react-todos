import { TodoStatus } from "./TodoStatus";

export interface Todo {
    id: number;
    title: string;
    status: TodoStatus
}