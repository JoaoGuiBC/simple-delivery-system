import { Request, Response } from 'express';

import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

interface IRequestDelivery {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name, id_client }: IRequestDelivery = request.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      item_name,
      id_client,
    });

    return response.json(delivery);
  }
}
