import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SingUpFormSchema = z.object({
  name: z.string().min(2, "Mínimo 2 letras").max(10, "máximo 10 letras"),
  lastName: z.string().min(2).max(10).optional(),
  age: z
    .number({ invalid_type_error: "Idade precisa ser um número." })
    .min(18, "precisar ser maior de 18 anos")
    .max(70, "para menores de 70 anos"),
});

const SingUpForm = () => {
  // type SingUpForm = {
  //   name: string; // reqired, minLength: 2, maxLength: 10
  //   lastName: string; // minLength: 2
  //   age: string; // reqired, min: 18, max: 70
  // };

  // type SingUpObject = z.infer<typeof SingUpFormSchema>;

  // const obj: SingUpObject = {
  //   name: "Steve",
  //   lastName: "Herison",
  //   age: 27,
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SingUpFormSchema),
  });

  const handleSingUpForm = () => {
    alert("Vai enviar");
  };

  return (
    <main className="w-full h-full flex flex-col items-center justify-center container mx-auto p-5 text-black">
      <h2 className="text-2xl text-white m-3">Formúlario</h2>
      <form
        onSubmit={handleSubmit(handleSingUpForm)}
        className="flex flex-col border w-full rounded-xl"
      >
        <div className="">
          <input
            {...register("name")}
            className="p-2 outline-none m-3 rounded-xl"
            placeholder="Qual o seu nome?"
            autoComplete="off"
          />
          {errors.name && <p>{errors.name.message as string}</p>}
        </div>
        <div>
          <input
            {...register("lastName")}
            className="p-2 outline-none m-3 rounded-xl"
            placeholder="Seu sobrenome"
            autoComplete="off"
          />
        </div>
        <div>
          <input
            {...register("age", { valueAsNumber: true })}
            className="p-2 outline-none m-3 rounded-xl"
            placeholder="Qual a sua idade?"
            autoComplete="off"
          />
          {errors.age && <p>{errors.age.message as string}</p>}
        </div>
        <button
          type="submit"
          className="p-1 rounded-xl bg-black m-3 text-white"
        >
          Enviar
        </button>
      </form>
    </main>
  );
};

export default SingUpForm;
