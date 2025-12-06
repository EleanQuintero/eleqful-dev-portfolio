import { FormSchema, type FormValues } from "@/models/form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import InputForm from "./InputForm";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputForm
        name="name"
        control={control}
        label="Nombre"
        placeholder="Tu nombre"
        type="text"
        error={errors.name}
      />
      <InputForm
        name="email"
        control={control}
        label="Email"
        placeholder="tu@email.com"
        type="email"
        error={errors.email}
      />
      <InputForm
        name="subject"
        control={control}
        label="Asunto"
        placeholder="Asunto de tu mensaje"
        type="text"
        error={errors.subject}
      />
      <InputForm
        name="message"
        control={control}
        label="Mensaje"
        placeholder="Cuentame sobre tu proyecto..."
        type="text"
        error={errors.message}
      />

      <Button type="submit" className="w-full" size="lg">
        <Send className="w-4 h-4 mr-2" />
        Enviar Mensaje
      </Button>
    </form>
  );
};

export default ContactForm;
