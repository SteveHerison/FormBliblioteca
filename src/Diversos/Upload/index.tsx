import { useRef, useState } from "react";

const Upload = () => {
  const [legendInpt, setLegendInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSend = async () => {
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const fileItem = fileInputRef.current.files[0];
      const allowed = ["image/jpeg", "image/png", "image/jpg"];

      if (allowed.includes(fileItem.type)) {
        const data = new FormData();
        data.append("Image", fileItem);
        data.append("legend", legendInpt);
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: {
            "Content-type": "multipart/form-data",
          },
          body: data,
        });
        const json = await res.json();
        console.log(json);
      }
    } else {
      alert("Selecione um arquivo");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full w-full p-2">
      <h1 className="text-2xl">Upload de Imagem</h1>
      <section className=" flex flex-col gap-2 justify-center  border border-dotted p-2">
        <input type="file" ref={fileInputRef} />
        <input
          type="text"
          name=""
          id=""
          placeholder="Dgite uma legenda"
          className="rounded-xl p-1"
          onChange={({ target }) => setLegendInput(target.value)}
        />
        <button
          className="p-2 bg-black rounded-xl mt-2"
          onClick={handleFileSend}
        >
          Enviar
        </button>
      </section>
      <div></div>
    </div>
  );
};

export default Upload;
