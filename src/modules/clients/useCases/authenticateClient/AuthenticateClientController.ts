import { Request, Response } from 'express';

import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

interface IRequestClient {
  username: string;
  password: string;
}

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password }: IRequestClient = request.body;

    const authenticateClientUseCase = new AuthenticateClientUseCase();

    const result = await authenticateClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
