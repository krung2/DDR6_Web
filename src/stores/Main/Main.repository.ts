import axios from "axios";
import { IUser } from "./MainStore";
import { DDR6_SERVER } from '../../config/config.json';

class MainRepository {

  async handleGetUser(): Promise<IUser> {

    try {

      const { data }: { data: IUser } = await axios.get(`${DDR6_SERVER}/user/all`);

      return data;

    } catch (err) {

      throw err;
    }
  }
}

export default new MainRepository();