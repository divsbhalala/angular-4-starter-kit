# ng-bs-redux-boilerplate 

Web project starter kit including modern tools and workflow based on
[angular-cli](https://github.com/angular/angular-cli), best practices from the community, a scalable base template and
a good learning base.

# Getting started

1. Go to project folder and install dependencies:
 ```bash
 npm install
 ```
 
2. Launch development server, and open `localhost:4200` in your browser:
 ```bash
 npm start
 ```
 
# Project structure

```
dist/                        compiled version
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
proxy.conf.js                backend proxy configuration
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

#### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://v4-alpha.getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ng-bootsrap](https://ng-bootstrap.github.io/)
- [Lodash](https://lodash.com)