import axios from "axios";
import { useRef, useState } from "react";

const ReqCancelar = () => {
  const controllerRef = useRef<AbortController | null>(null);

  const [message, setMessage] = useState("");

  const handleStartRequest = async () => {
    controllerRef.current = new AbortController(); // Cria uma nova instância de AbortController
    setMessage("Carregando...");

    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          signal: controllerRef.current.signal,
        }
      );
      console.log(res);
      setMessage("Requisição concluída com sucesso!");
    } catch (error) {
      if (axios.isCancel(error)) {
        setMessage("Requisição cancelada.");
      } else {
        setMessage("Algum erro ocorreu...");
      }
    }
  };

  const handleCancelRequest = () => {
    if (controllerRef.current) {
      controllerRef.current.abort(); // Aborta a requisição
      setMessage("Requisição cancelada manualmente.");
    }
  };

  return (
    <main className="w-full h-full flex justify-center items-center">
      <section className="flex flex-col gap-4">
        <button
          onClick={handleStartRequest}
          className="bg-black p-2 rounded-xl hover:bg-black/45"
        >
          FAZER
        </button>
        <button
          onClick={handleCancelRequest}
          className="bg-black p-2 rounded-xl hover:bg-black/45"
        >
          CANCELAR
        </button>
        <p>{message}</p> {/* Exibe a mensagem de status */}
      </section>
    </main>
  );
};

export default ReqCancelar;
