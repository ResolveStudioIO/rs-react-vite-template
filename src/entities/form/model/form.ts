import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(2, 'Минимум 2 символа'),
});

export type FormSchema = z.infer<typeof formSchema>;
