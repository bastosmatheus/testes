import { describe, it, expect } from "vitest";
import { UserService } from "../services/UserService";

describe("Testando a criação de usuários (conjunto de testes unitários)", () => {
  it("Deve ser possível criar um usuário (teste unitário)", async () => {
    const userService = new UserService({
      async createUser(nickname: string, user_password: string) {
        return {
          id: 1,
          nickname,
          user_password,
          created_at: 10,
        };
      },

      async getAllUsers() {
        return this.users;
      },
    });

    const user = await userService.createUser("Roberto", "senhadoroberto");

    expect(user).toEqual({
      id: 1,
      nickname: "Roberto",
      user_password: "senhadoroberto",
      created_at: 10,
    });
  });
});
