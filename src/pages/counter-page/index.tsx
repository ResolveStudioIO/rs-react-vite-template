import { useCounter } from '@/features';
import { Button } from '@/shared';

export function CounterPage() {
    const count = useCounter((s) => s.count);
    const inc = useCounter((s) => s.inc);

    return (
        <div className="space-y-2">
            <p>Counter: {count}</p>
            <Button onClick={inc}>Increment</Button>
        </div>
    );
}
