import { autobind } from "core-decorators";
import { action } from "mobx";
import TokenRepository from "./Token.repository";


@autobind()
export default class MainStore {

  @action
  async handleToken(code: string) {

    try {

      console.log(1);
      const { data } = await TokenRepository.handleToken(code);

      return data.token;
    } catch (err) {

      throw err;
    }
  }

}

