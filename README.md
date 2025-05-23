# Minimal Starter Kit for @matstack/remix-adonisjs

This repo contains an AdonisJS application tailored for building fullstack applications using [remix-adonisjs](https://matstack.dev/remix-adonisjs).

## Usage

You can create a new app using the `remix-adonisjs` boilerplate by executing the following command. The command will perform the following steps.

- Clone the repo
- Install dependencies
- Copy `.env.example` to `.env`
- Set app key using `node ace generate:key` command.
- Configure the `@adonisjs/lucid` package.
- Configure the `@adonisjs/auth` package.
- Configure the `@matstack/remix-adonisjs` package.

```sh
npm init adonisjs@latest -- -K="github:jarle/remix-starter-kit"
```

After installation you can add your first Remix route by running:

```
node ace remix:route hello
```
