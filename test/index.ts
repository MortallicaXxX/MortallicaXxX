import Task from '../src/index';

(async function main(){

  const workerAuth = await (new Task('worker:auth')).Import('../test/workers/auth');

  console.log(workerAuth._id);
  console.log(workerAuth.name);

  const hashed = await workerAuth.run.hashPassword("Super secret password", "1234");
  console.log(hashed);

})()
