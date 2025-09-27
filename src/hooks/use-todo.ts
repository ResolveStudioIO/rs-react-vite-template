import { useQuery } from '@tanstack/react-query';

import { TODO_QUERY_KEY } from '@/constants';
import { TodoService } from '@/services';

export const useTodo = () => {
    return useQuery({ queryKey: TODO_QUERY_KEY, queryFn: () => TodoService.fetchTodo() });
};
