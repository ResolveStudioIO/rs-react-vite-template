import { api } from '@/api';
import { type Todo, todoSchema } from '@/schemas';

export class TodoService {
    public static async fetchTodo(): Promise<Todo> {
        const res = await api.get('/todos/1');
        return todoSchema.parse(res.data);
    }
}
