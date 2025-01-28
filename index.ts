console.log("Hola, TypeScript!");

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  role: "admin" | "user" | "super-admin";
}

// assigning types to variables
const defaultUser: User = {
  id: 0,
  firstName: "Richard",
  lastName: "Rodriguez",
  isAdmin: true,
  // da error si está bien
  // @ts-expect-error
  role: "admin",
};

const getUserId = (user: User) => {
  return user.id;
};

getUserId(defaultUser);

//Arrays TypeScript
interface User2 {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  post: Post[];
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser2: User2 = {
  id: 1,
  firstName: "Richard",
  lastName: "Rodriguez",
  role: "admin",
  post: [
    { id: 1, title: "instagram" },
    { id: 2, title: "facebook" },
  ],
};
