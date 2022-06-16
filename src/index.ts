import * as Threads from "threads";
import { v4 as uuidv4 } from 'uuid';

const { spawn:spawn , Thread:Thread , Worker:Worker } = Threads;

export {
  spawn,
  Thread,
  Worker
} from "threads";

export {
  expose
} from "threads/worker";

export default class Task{

  /** Id de Task */
  #_id:string = uuidv4();
  get _id(){return this.#_id;}

  /** Name de task */
  #_name:string;
  get name(){return this.#_name;}

  #_import:{ worker:any , spawn:any } = { worker:null , spawn:null };
  get worker(){return this.#_import.worker}
  get run(){return this.#_import.spawn}

  constructor(workerName:string){

    this.#_name = workerName;

  }

  async Import(path:string){
    const _this:Task = this;
    this.#_import.worker = new Worker(path);
    this.#_import.spawn = await spawn(_this.#_import.worker);
    return this;
  }

}
