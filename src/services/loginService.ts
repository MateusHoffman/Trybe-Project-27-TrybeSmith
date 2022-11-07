import LoginModel from '../models/LoginModel';
import { IPostLogin } from '../interfaces/login.interface';
// import { IUser } from '../interfaces/users.interface';
import TokenUtils from '../utils/JWT';

export default class LoginService {
  model: LoginModel;

  jwt: TokenUtils;

  constructor() {
    this.model = new LoginModel();
    this.jwt = new TokenUtils();
  }

  async postLogin(postObj: IPostLogin) {
    const { username, password } = postObj;

    if (!username) return { status: 400, response: { message: '"username" is required' } };
    if (!password) return { status: 400, response: { message: '"password" is required' } };
    
    const row = await this.model.getUserByPostLogin(postObj);

    if (!row) return { status: 401, response: { message: 'Username or password invalid' } };
    const { id, classe, level } = row;
    const token = this.jwt.generateToken({ id, username, classe, level });
    return { status: 200, response: { token } };
  }
}