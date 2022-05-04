# Webpack Module Federation Example

This is an example repository demonstrating micro-frontends using Webpack Module Federation.

# Context

There are 2 applications;

- `container-app`: React "container" app
- `remote-app`: React micro-frontend

`remote-app` is exposing a component called `contact-us-form` and is consumed by `container-app`.

# Setup

- run `npm install` - Install all the dependencies to run the apps in parallel.
- run `npm run install:apps` - Install all the required dependencies on both `container-app` and `remote-app`.
- run `npm run start` - Start both `container-app` and `remote-app`.

# Running

- `container-app` runs on `localhost:3000`
- `remote-app` runs on `localhost:3001`
