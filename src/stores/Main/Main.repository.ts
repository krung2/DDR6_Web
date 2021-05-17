import axios from "axios";
import { IReqBody, IReqBodyNot, IUser } from "./MainStore";
import { DDR6_SERVER } from '../../config/config.json';

class MainRepository {

  async handleAddUser(reqBody: IReqBody, token: string): Promise<void> {

    try {

      await axios.post(`${DDR6_SERVER}/user`, reqBody, {
        headers: {
          'access-token': token,
        },
      });

    } catch (err) {

      throw err;
    }
  }

  async handleAddUserNot(reqBody: IReqBodyNot): Promise<void> {

    try {

      await axios.post(`${DDR6_SERVER}/user/not`, reqBody, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });

    } catch (err) {

      throw err;
    }
  }

  async handleGetUser(): Promise<IUser> {

    try {

      const { data }: { data: IUser } = await axios.get(`${DDR6_SERVER}/user/all`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });

      return data;

    } catch (err) {

      throw err;
    }
  }
}

export default new MainRepository();