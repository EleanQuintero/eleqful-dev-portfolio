import { z } from 'zod';

export const FormSchema = z.object({
    name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre es muy largo'),
    email: z.email('Dirección de email no es válida'),
    subject: z.string().min(1, 'Sujeto del mensaje es requerido').max(100, 'Sujeto es muy largo'),
    message: z.string().min(25, 'El mensaje debe ser mayor a 25 caracteres ').max(250, 'El mensaje es debe ser menor a 250 caracteres '),
});

export type FormValues = z.infer<typeof FormSchema>;