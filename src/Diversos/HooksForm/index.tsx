import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Papel from "../../assets/papel.png";
import { InputFormSingUp } from "../../types/InputFormSingUp";
import { Input } from "@mui/material";
import ButtonForm from "../../components/Forms/ButtonForm";

const SingUpForm = () => {
  const { handleSubmit, control } = useForm<InputFormSingUp>();

  const handleFormSubmit: SubmitHandler<InputFormSingUp> = (data) => {
    console.log(data);
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <section className="flex flex-col md:flex-row h-full w-full">
        <div className="md:flex-1 flex items-center justify-center p-5 md:p-0">
          <img
            src={Papel}
            alt="Papel de parede"
            className="w-full h-full object-cover rounded-full md:rounded-none"
          />
        </div>

        <figure className="flex-1 h-full flex items-center justify-center p-5">
          <form
            className="flex flex-col justify-center w-96 gap-2"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Controller
              control={control}
              name="name"
              rules={{ required: true, minLength: 2, maxLength: 10 }}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  error={fieldState.invalid}
                  className="bg-zinc-300/50  outline-none"
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              rules={{ required: true, minLength: 2, maxLength: 10 }}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  error={fieldState.invalid}
                  className="bg-zinc-300/50  outline-none"
                />
              )}
            />
            <Controller
              control={control}
              name="age"
              rules={{ required: true, min: 18, max: 70 }}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  error={fieldState.invalid}
                  className="bg-zinc-300/50  outline-none"
                />
              )}
            />
            <ButtonForm type="submit" title="Enviar" />
          </form>
        </figure>
      </section>
    </main>
  );
};

export default SingUpForm;
