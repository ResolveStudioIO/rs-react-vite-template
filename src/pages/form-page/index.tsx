import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input.tsx';
import { type FormSchema, formSchema } from '@/schemas/form';

export default function FormPage() {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: '' },
    });

    function onSubmit(values: FormSchema) {
        alert(`Отправлено: ${JSON.stringify(values)}`);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Имя</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Введите имя" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Отправить</Button>
            </form>
        </Form>
    );
}
