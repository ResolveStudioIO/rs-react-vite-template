import { Button } from '@/components/ui/button.tsx';
import { useCounter } from '@/stores';

export default function CounterPage() {
    const count = useCounter((s) => s.count);
    const inc = useCounter((s) => s.inc);

    return (
        <div className="space-y-2">
            <p>Счётчик: {count}</p>
            <Button onClick={inc}>Увеличить</Button>
        </div>
    );
}
