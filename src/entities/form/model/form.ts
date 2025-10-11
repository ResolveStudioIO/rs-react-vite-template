import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(2, 'Minimum 2 characters'),
});

export type FormSchema = z.infer<typeof formSchema>;
