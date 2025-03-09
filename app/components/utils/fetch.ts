const fakeAPIUrl = "https://dummyjson.com/users?limit=10";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
}

export const fetchUsers = async (): Promise<{ users: IUser[] }> => {
  const response = await fetch(fakeAPIUrl);
  if (response.ok) {
    return response.json();
  }
  return { users: [] };
};
