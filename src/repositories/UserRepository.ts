import { sql } from "../index";

interface User {
  id: number;
  nickname: string;
  user_password: string;
  created_at: Date;
}

class UserRepository {
  public async getAllUsers() {
    const users = await sql/*sql*/ `
      SELECT * FROM users
    `;

    return users;
  }

  public async createUser(nickname: string, user_password: string) {
    const user = await sql/*sql*/ `
      INSERT INTO users (nickname, user_password)
      VALUES (${nickname}, ${user_password})

      RETURNING *
    `;

    return user[0];
  }
}

export { UserRepository };
