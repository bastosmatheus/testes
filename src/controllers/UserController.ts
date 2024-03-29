import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

class UserController {
  public async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();

    res.status(200).json({ users });
  }

  public async createUser(req: Request, res: Response) {
    const { nickname, user_password } = req.body;

    const user = await userService.createUser(nickname, user_password);

    return res.status(200).json({ user });
  }
}

export { UserController };
