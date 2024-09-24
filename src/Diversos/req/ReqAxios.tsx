import { api } from "../utils/api";

const ReqAxios = () => {
  const handleAddPost = async () => {
    const res = await api.post("/posts", {
      userId: 95,
      title: "titulo do post",
      body: "corpo do post",
    });

    //   const handleGetPost = async () => {
    //     const requestParams = {
    //       postId: 1,
    //       sort: "desc",
    //     };
    //     const res = await axios.get(
    //       "https://jsonplaceholder.typicode.com/comments",
    //       {
    //         params: requestParams,
    //         // {
    //         //   postId: 1,
    //         // },
    //       }
    //     );
    //     console.log(res);
    if (res.data.id) {
      console.log("oi");
    } else {
      console.log("ei");
    }
  };
  return (
    <div className="w-full h-full p-2 flex justify-center items-center">
      <button
        onClick={handleAddPost}
        className="bg-black p-2 rounded hover:bg-black/40"
      >
        Pegar Posts
      </button>
    </div>
  );
};

export default ReqAxios;
