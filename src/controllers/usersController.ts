import { Request, Response } from 'express';
import UsersService from '../services/usersService';
// import { IUsers } from '../interfaces/users.interface';

class UsersController {
  service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  async postUser(req: Request, res: Response) {
    const token = await this.service.postUser(req.body);
    res.status(201).json(token);
  }
}

export default new UsersController();