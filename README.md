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



