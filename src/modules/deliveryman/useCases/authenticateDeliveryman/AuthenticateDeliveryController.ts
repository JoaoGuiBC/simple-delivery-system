import { Request, Response } from 'express';

import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliveryUseCase';

interface IRequestDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password }: IRequestDeliveryman = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
