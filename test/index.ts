// import * as Threads from "threads";
//
// const { spawn:spawn , Thread:Thread , Worker:Worker } = Threads;
//
// (async function main(){
//
//   console.log(Worker);
//
//   const auth = await spawn(new Worker("./workers/auth"));
//
//   const hashed = await auth.hashPassword("Super secret password", "1234")
//
//   console.log("Hashed password:", hashed);
//
//   await Thread.terminate(auth);
//
// })()

import Task from '../src/index';

(async function main(){

  const workerAuth = await (new Task('worker:auth')).Import('../test/workers/auth');

  console.log(workerAuth._id);
  console.log(workerAuth.name);

  const hashed = await workerAuth.run.hashPassword("Super secret password", "1234")
  console.log(hashed);

})()
