import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const FROM_EMAIL = import.meta.env.FROM_EMAIL
const TO_EMAIL = import.meta.env.TO_EMAIL

export const server = {
    send: defineAction({
        accept: 'json',
        input: z.object({
            name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre es muy largo'),
            email: z.string().email('Dirección de email no es válida'),
            subject: z.string().min(1, 'Sujeto del mensaje es requerido').max(100, 'Sujeto es muy largo'),
            message: z.string().min(25, 'El mensaje debe ser mayor a 25 caracteres').max(250, 'El mensaje debe ser menor a 250 caracteres'),
        }),
        handler: async (input) => {
            const { name, email, subject, message } = input;

            const { data, error } = await resend.emails.send({
                from: `${FROM_EMAIL}`,
                to: [`${TO_EMAIL}`],
                subject: `Nuevo Mensaje desde la web: ${subject}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #1E2952;">Nuevo mensaje desde tu portfolio</h2>
                        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p><strong>Nombre:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Asunto:</strong> ${subject}</p>
                        </div>
                        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                            <h3 style="color: #0F6E8F;">Mensaje:</h3>
                            <p style="white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                `,
            });

            if (error) {
                throw new ActionError({
                    code: 'BAD_REQUEST',
                    message: error.message,
                });
            }

            return { success: true, data };
        },
    }),
};