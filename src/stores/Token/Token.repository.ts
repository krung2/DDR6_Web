import axios from "axios";
import { DDR6_SERVER } from '../../config/config.json';

class TokenRepository {

  async handleToken(code: string) {

    try {

      const { data } = await axios.get(`${DDR6_SERVER}/token?code=${code}`)

      return data;
    } catch (err) {

      throw err;
    }
  }
}

export default new TokenRepository();