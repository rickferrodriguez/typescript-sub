console.log("Hola, TypeScript!");

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

// assigning types to variables
const defaultUser: User = {
  id: 0,
  firstName: "Richard",
  lastName: "Rodriguez",
  isAdmin: true,
};

const getUserId = (user: User) => {
  return user.id;
};

getUserId(defaultUser);
