# AdonisJS Remix Starter Kit

This repo contains an AdonisJS application tailored for building a fullstack application using [remix-adonisjs](https://github.com/jarle/remix-adonisjs).

This starter kit is based on the [AdonisJS web starter](https://github.com/adonisjs/web-starter-kit/).

## Usage

You can create a new app using the `remix` boilerplate by executing the following command. The command will perform the following steps.

- Clone the repo
- Install dependencies
- Copy `.env.example` to `.env`
- Set app key using `node ace generate:key` command.
- Configure `@adonisjs/lucid` package.
- Configure `@adonisjs/auth` package.
- Configure `@matstack/remix-adonisjs` package.

```sh
npm init adonisjs -- -K="github:jarle/remix-starter-kit"
```

### Configuring Lucid database dialect

By default, the `npm init adonisjs` command configures Lucid to use `sqlite`.
However, you can define a custom database dialect as follows.

```sh
npm init adonisjs -- -K="github:jarle/remix-starter-kit" --db=postgres
```

Available options for the `--db` flag.

- sqlite
- postgres
- mysql
- mssql

### Configuring Auth package guard

By default, the `npm init adonisjs` command configures the Auth package to use `session` guard.
However, you can define a custom auth guard as follows.

```sh
npm init adonisjs -- -K="github:jarle/remix-starter-kit" --auth-guard=oat
```

Available options for the `--auth-guard` flag.

- session
- basic_auth
- oat
