import { Request, Response } from 'express';
import LoginService from '../services/loginService';

class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  async postLogin(req: Request, res: Response) {
    const { status, response } = await this.service.postLogin(req.body);
    res.status(status).json(response);
  }
}

export default new LoginController();