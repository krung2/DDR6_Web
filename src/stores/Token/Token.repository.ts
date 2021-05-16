import axios from "axios";
import { DDR6_SERVER } from '../../config/config.json';

class TokenRepository {

  async handleToken(code: string) {

    try {

      console.log(code);
      const { data } = await axios.get(`${DDR6_SERVER}/token?code=${code}`)

      console.log(2)
      return data;
    } catch (err) {

      throw err;
    }
  }
}

export default new TokenRepository();