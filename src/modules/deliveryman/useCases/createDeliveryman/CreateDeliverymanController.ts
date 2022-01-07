import { Request, Response } from 'express';

import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

interface IRequestDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password }: IRequestDeliveryman = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();

    const result = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
