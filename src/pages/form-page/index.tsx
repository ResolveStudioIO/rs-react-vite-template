import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { type FormSchema, formSchema } from '@/entities';
import { Button } from '@/shared';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared';
import { Input } from '@/shared';

export function FormPage() {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: '' },
    });

    function onSubmit(values: FormSchema) {
        alert(`Submitted: ${JSON.stringify(values)}`);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter name" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
