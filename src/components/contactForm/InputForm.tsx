import type { Control, FieldError } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  error?: FieldError;
  placeholder?: string;
}

const InputForm = ({
  name,
  control,
  label,
  type,
  error,
  placeholder,
}: Props) => {
  return (
    <div className=" space-y-2 mb-4 flex flex-col ">
      <Label className="mb-2 font-bold" htmlFor={name}>
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={name}
            type={type}
            {...field}
            placeholder={placeholder}
            className={`p-2 ${error ? "border-red-500" : ""}`}
          />
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputForm;
