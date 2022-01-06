import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../../database/prismaClient';

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error('Invalid username/password combination');
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error('Invalid username/password combination');
    }

    const token = sign({ username }, '7b43358fa0edf95e5095d6cd98b53d7d', {
      subject: client.id,
      expiresIn: '1d',
    });

    return token;
  }
}
