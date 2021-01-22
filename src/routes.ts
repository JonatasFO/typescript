import { Request, Response } from 'express';
import createUser  from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Jonatas',
    email: 'jonatas@email.com',
    password: '123456',
    techs: [
      'Java',
      'React',
      'Javascript',
      {title: 'C#', experience: 100 },
    ],
  });

  console.log(user.)

  return response.json({ message:  'Hello World' });
}