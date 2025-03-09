import { useEffect, useState } from "react";
import { fetchUsers, type IUser } from "./utils/fetch";

export default function TodoList() {
  const [isLoading, setLoading] = useState(false);
  const [listUsers, setListUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const { users } = await fetchUsers();
      // console.log(data)
      setLoading(false);
      setListUsers(users);
    };
    loadData();
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      {listUsers.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </>
  );
}

function User({ id, firstName, lastName, image }: IUser) {
  return (
    <div>
      <h2>{`${firstName} ${lastName}`}</h2>
      <img src={image} alt={`image_user_${id}`} />
    </div>
  );
}
