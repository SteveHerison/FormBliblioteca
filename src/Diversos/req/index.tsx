import { useEffect, useState } from "react";
import { User } from "../../types/User";

const Index = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUsers(json);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleAddNewPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: "Post de test",
        body: "Corpo de test",
        userId: 99,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-2 h-full overflow-y-auto w-full">
      {loading && "...Carregando"}
      <button className="bg-slate-500 p-2 " onClick={handleAddNewPost}>
        Adiconar Post
      </button>
      {users.map(({ id, name, username, email, address }) => (
        <ul key={id} className="space-y-2 border p-2">
          <li className="flex gap-2">
            <p>Nome:</p>
            {name}
          </li>
          <li className="flex gap-2">
            <p>Usuário:</p>
            {username}
          </li>
          <li className="flex gap-2">
            <p>Email:</p>
            {email}
          </li>
          <li className="flex gap-2">
            <p>Cidade:</p>
            {address.city}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Index;
