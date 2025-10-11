import { type Todo, todoSchema } from '@/entities/todo/model/todo';
import { api } from '@/shared';

export class TodoService {
    public static async fetchTodo(): Promise<Todo> {
        const res = await api.get('/todos/1');
        return todoSchema.parse(res.data);
    }
}
