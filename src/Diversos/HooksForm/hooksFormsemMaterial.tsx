import { SubmitHandler, useForm } from "react-hook-form";

import Papel from "../../assets/papel.png";
import { InputFormSingUp } from "../../types/InputFormSingUp";
import InputForm from "../../components/Forms/InputForm";
import ButtonForm from "../../components/Forms/ButtonForm";

const SingUpForm = () => {
  const { handleSubmit, control, setValue } = useForm<InputFormSingUp>();

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
            className="flex flex-col justify-center w-96 "
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <InputForm
              title="First Name"
              type="text"
              placeholder="Qual é o seu Nome"
              control={control}
              name="name"
              rules={{
                required: "Nome é obrigatório",
                minLength: { value: 2, message: "Nome muito curto" },
                maxLength: { value: 10, message: "Nome muito longo" },
              }}
            />

            <InputForm
              title="Last Name"
              type="text"
              placeholder="Qual é o seu Sobrenome"
              control={control}
              name="lastName"
              rules={{
                required: "Sobrenome é obrigatório",
                minLength: { value: 2, message: "Sobrenome muito curto" },
                maxLength: { value: 10, message: "Sobrenome muito longo" },
              }}
            />

            <InputForm
              title="Age"
              type="number"
              placeholder="Qual é a sua Idade"
              control={control}
              name="age"
              rules={{
                required: "Idade é obrigatória",
                min: { value: 18, message: "Idade mínima é 18" },
                max: { value: 70, message: "idade máxima é 70" },
              }}
            />

            <ButtonForm type="submit" title="Enviar" />
            <ButtonForm
              title="Definir como maior de idade"
              onClick={() => setValue("age", 18)}
            />
          </form>
        </figure>
      </section>
    </main>
  );
};

export default SingUpForm;
