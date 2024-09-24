import { Form, useForm } from "react-hook-form";

const SingUpForm = () => {
  const { register, control } = useForm();

  const handleSuccess = () => {
    alert("Deu tudo certo!");
  };

  const handleError = () => {
    alert("Deu Erro");
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <Form
        className="flex flex-col w-full container mx-auto p-2 gap-4"
        control={control}
        action={"https://jsonplaceholder.typicode.com/posts"}
        // method="post | delete | put | get"
        onSuccess={handleSuccess}
        onError={handleError}
      >
        <input
          {...register("title", { required: true })}
          className="p-1 rounded-xl outline-none"
        />
        <input
          {...register("body", { required: true })}
          className="p-1 rounded-xl outline-none"
        />
        <input
          {...register("userId", { required: true })}
          className="p-1 rounded-xl outline-none"
        />
        <button className="p-1 bg-black text-orange-500 rounded-xl">
          Enviar
        </button>
      </Form>
    </main>
  );
};

export default SingUpForm;
