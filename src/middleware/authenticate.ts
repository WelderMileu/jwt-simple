import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

class bootstrap {
  // Pagina Inicial
  index(request: Request, response: Response) {
    response.json({
      message: "page index",
    });
  }

  // Authenticação
  async authenticate(request: Request, response: Response) {
    const { username, password } = await request.body;
    const id = 1;
    const key =
      "1e9814441d4828ec2b9e7e9c25e7bd12ffb325cec3d614c28b4557a15ced858612a462d34775a762112cbfb86fb69454f03e65b9f76774d42481584d4ffa91e7";

    try {
      if (username === "admin" && password === "admin") {
        const token = sign({ id }, key, { expiresIn: "1d" });

        return response.json({
          token,
        });
      } else {
        return response
          .status(403)
          .json({ erro: "Usuario ou senha invalidos" });
      }
    } catch (e) {
      return response.json({ erro: e });
    }
  }

  // Verificando usuario
  async getToken(request: Request, response: Response) {
    const basic = await request.headers.authorization;

    return response.json({ basic });
  }
}

export default new bootstrap();
