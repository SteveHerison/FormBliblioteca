import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SingUpFormSchema = z.object({
  name: z.string().min(2).max(10),
  lastName: z.string().min(2).optional(),
  age: z.number().min(18).max(70),
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

  const { register, handleSubmit } = useForm({
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
        <input
          {...register("name")}
          className="p-2 outline-none m-3 rounded-xl"
          autoComplete="off"
        />
        <input
          {...register("LastName")}
          className="p-2 outline-none m-3 rounded-xl"
          autoComplete="off"
        />
        <input
          {...register("age", { valueAsNumber: true })}
          className="p-2 outline-none m-3 rounded-xl"
          autoComplete="off"
        />
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
