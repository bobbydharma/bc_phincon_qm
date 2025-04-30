export interface User {
  id: number;
  name: string;
  email: string;
}

export let users: User[] = [
  { id: 1, name: "Bang Sen", email: "bangsen@example.com" },
  { id: 2, name: "Paupau", email: "paupau@example.com" },
];
