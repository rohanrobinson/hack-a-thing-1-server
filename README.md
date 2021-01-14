# hack-a-thing-1-server

## conceptual idea of a healthcare provider managing their patient data
## learned to set up a Express app connected to a Postgres database
## provides api to be consumed by client-side found at https://github.com/rohanrobinson/hack-a-thing-1-client

## runs on http://localhost:3000/api/v1/patients

## Pre-requisites

* postgres installed locally
* OSX - brew install postgres
* npm install -g knex

## Setup

```sh
npm install # install dependencies
createdb patient_data # create postgres db
knex migrate:latest # create tables in db
knex seed:run # add sample data to db
```

## Development Start

```sh
npm run dev
```

## Based off of inspiration for Coding Garden Youtube tutorial, https://www.youtube.com/watch?v=aql62xliRzE
## Created for COSC 98.01, Winter Term 2021

## by Rohan Robinson

