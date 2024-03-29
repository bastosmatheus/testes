import { UserRepository } from "../repositories/UserRepository";

class UserService {
  public constructor(private userRepository: UserRepository) {}

  public async getAllUsers() {
    const users = await this.userRepository.getAllUsers();

    return users;
  }

  public async createUser(nickname: string, user_password: string) {
    const user = await this.userRepository.createUser(nickname, user_password);

    return user;
  }
}

export { UserService };
