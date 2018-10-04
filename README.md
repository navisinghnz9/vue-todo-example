# vue-todo-example
A todo example project with vue and sanity for the beginners.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Sanity Client
- Santiy client is used to get data via sanity APIs. [Check sanity client docs](https://www.sanity.io/docs/client-libraries/js-client)
- Setup an environment variable for sanity's access token, named as SANITY_TODO_ACCESS_TOKEN, as use it in sanity.js
- You need to enable CORS for your vue frontend: 
```
sanity cors add http://localhost:8080
```

