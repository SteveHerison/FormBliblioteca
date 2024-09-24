import { forwardRef } from "react";
import { InputFormSingUp } from "../../types/InputFormSingUp";
import { useController, UseControllerProps } from "react-hook-form";

const InputForm = forwardRef<
  HTMLInputElement,
  InputFormSingUp & UseControllerProps<InputFormSingUp>
>(({ id, title, type, placeholder, ...props }, ref) => {
  const { field, fieldState } = useController({
    ...props,
    defaultValue: "", // Valor padrão
  });

  return (
    <label htmlFor={id} className="flex flex-col">
      {title}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...field}
        ref={ref}
        className={`p-1 rounded-xl outline-none text-black ${
          fieldState.invalid ? "border-red-500 border" : "outline-none"
        }`}
      />
      {fieldState.error && (
        <p className="text-red-500">{fieldState.error.message}</p>
      )}
    </label>
  );
});

export default InputForm;
