export type UserType = {
    name?: string;
    email: string;
    avatar?: string;
    password: string;
  };

 export type UserKey = keyof  UserType