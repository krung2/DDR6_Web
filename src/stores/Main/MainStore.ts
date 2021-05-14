import { autobind } from "core-decorators";
import { observable } from "mobx";

@autobind()
export default class MainStore {

  @observable users:  = [];
}


export interface IUser {
  status: number;
  message: string;
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  uniqueId: string;
  generation: string;
  name: string;
  userName: string;
  profileImage: string;
  level: number;
  rank: string;
  rankImage: string;
  wl: number;
  wins: number;
  losses: number;
  kd: number;
}
