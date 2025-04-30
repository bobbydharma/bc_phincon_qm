import { User, users } from "../models/userModel";

class UserService {
  getAllUsers(): User[] {
    return users;
  }

  getUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
  }

  createUser(user: User): void {
    user.id = users.length + 1;
    users.push(user);
  }

  updateUser(id: number, updatedUser: Partial<User>): boolean {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return true;
    }
    return false;
  }

  deleteUser(id: number): boolean {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default new UserService();
