import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../../database/prismaClient';

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error('Invalid username/password combination');
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error('Invalid username/password combination');
    }

    const token = sign({ username }, '6a43358fa0edf95e5095d6cd98b53d7d', {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return token;
  }
}
