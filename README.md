# Complete conquest of Vitest

- npm init -y
- touch .gitignore
- touch READEMe.md
- git init 
- git add .
- git commit -m "FEAT: init project"

## Use Typescript
- tsc --init
- open `tsconfig.json` and 
Change baseURl to an absolute path instead of a relative path.
  "baseUrl": "./",   
- make directory /src
  /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
     "rootDir": "./src",  

# Vitest
doc link: (https://vitest.dev/)
- Getting Started
link: (https://vitest.dev/guide/)

## Adding Vitest to Your Project
```bash
npm install -D vitest
```

- add scripts in packge.json 

```json
"scripts": {
    "test": "vitest"

}
```

- npm run test

## 3. När du bara vill testa en del under utvecklingen
ex )

```bash
npm run test src/functions/check-is-two.spec.ts:4
```

## Använda Inkludera och Exkludera i Vitest

- skapa vitest.config.ts file
```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
        // '**\/*.{test,spec}.?(c|m)[jt]s?(x)',
        '**/check-is-two.spec.ts',
    ],
  },
})
```

- eller 
### install Vitest extention 


