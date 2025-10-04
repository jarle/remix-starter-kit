# Minimal Starter Kit for @matstack/react-adonisjs

This repo contains an AdonisJS application tailored for building fullstack applications using [react-adonisjs](https://matstack.dev/react-adonisjs).

## Usage

You can create a new app using the `react-adonisjs` boilerplate by executing the following command. The command will perform the following steps.

- Clone the repo
- Install dependencies
- Copy `.env.example` to `.env`
- Set app key using `node ace generate:key` command.
- Configure the `@adonisjs/lucid` package.
- Configure the `@adonisjs/auth` package.
- Configure the `@matstack/react-adonisjs` package.

```sh
npm init adonisjs@latest -- -K="github:jarle/react-router-starter-kit"
```

After installation you can add your first React Router route by running:

```
node ace react:route hello
```
