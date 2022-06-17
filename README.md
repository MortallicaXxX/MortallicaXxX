# MortallicaXxX - @Task

Task est une librairie réalisée en typescript sur base sur le module `Thread.js`. Task permet de préparer un process et son environement en parallèle du main process.
Une task fonctionne un peu comme un `require` ou `import`, à savoir charger un fichier pour exécuter les fonctions y étant déclarée et exportée. La différence ici est que ces méthodes s'exécuteront sur un thread en parallèle.

## Comment l'utiliser ?

Dans cette exemple un hash aura lieu sur un thread en parallèle.
Un module `js-sha256` est à installer pour l'exemple.

### Javascript
```javascript

```

### Typescript
```typescript
  /// index.ts
  import Task from 'Task';

  (async function main(){

    const workerAuth = await (new Task('worker:auth')).Import('worker/auth');

    console.log(workerAuth._id); // Id de la task
    console.log(workerAuth.name); // Nom de la task

    const hashed = await workerAuth.run.hashPassword("Super secret password", "1234");
    console.log(hashed);

  })()
```

```typescript
  /// worker/auth.ts
  import { sha256 } from "js-sha256";
  import { expose } from 'Task';

  expose({
    hashPassword(password, salt) {
      return sha256(password + salt)
    }
  })
``
