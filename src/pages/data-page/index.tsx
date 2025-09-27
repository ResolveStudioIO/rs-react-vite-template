import { useTodo } from '@/hooks';

export default function DataPage() {
    const { data, isLoading } = useTodo();
    if (isLoading) return <p>Загрузка...</p>;
    return <pre className="bg-muted p-2 rounded">{JSON.stringify(data, null, 2)}</pre>;
}
