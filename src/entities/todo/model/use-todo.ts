import { useQuery } from '@tanstack/react-query';

import { TodoService } from '@/entities';
import { TODO_QUERY_KEY } from '@/shared/constants';

export const useTodo = () => {
    return useQuery({ queryKey: TODO_QUERY_KEY, queryFn: () => TodoService.fetchTodo() });
};
