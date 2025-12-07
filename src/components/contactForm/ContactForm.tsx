import { FormSchema, type FormValues } from "@/models/form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { actions } from "astro:actions";
import { Button } from "../ui/button";
import InputForm from "./InputForm";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const { data: result, error } = await actions.send(data);

      if (error) {
        setSubmitStatus({
          type: "error",
          message: error.message || "Error al enviar el mensaje",
        });
      } else {
        setSubmitStatus({
          type: "success",
          message: "¡Mensaje enviado con éxito! Te contactaré pronto.",
        });
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Error al enviar el mensaje. Por favor, intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
      reset();
    }
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

      {submitStatus.type && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        <Send className="w-4 h-4 mr-2" />
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  );
};

export default ContactForm;
