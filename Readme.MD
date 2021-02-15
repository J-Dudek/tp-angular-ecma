# Ecmascript tp

This practice is a fastify api agregator.

Please reference to the lab for what to do.

## Install

```shell
$ yarn install
# OR
$ npm install
```

## Start the server

```shell
$ yarn start
# OR
$ npm run start
```
---
# Consigne
## 1 Subject and how to answer
This TP is about how to use promises, import syntax and modern javascript.

Here is what I expect on courso :

The git repository
You must send it by February 17 22:00 max.

### What you will build
First of, you must start by a click the "use the template" on the repo [github](https://github.com/beaussan/2020-2021-angular-ecma-tp).

You will make an API that aggregates other APIs.

### Grading
This TP is graded regarding how far you got it and how well you dit it.

**FOR CORRECTION PURPOSE, please write all code into index.js.**

## 2. The list of api you need to call
### Cat facts !
I want 3 cat facts. Only the text, not any extra infos.

https://alexwohlbruck.github.io/cat-facts/
### A fox a day
I want a random image of a fox to be send too

from this api : https://randomfox.ca/floof/

### The day off of the country of my choice
Using the api of https://date.nager.at/

Example of input of the api :
```json
{
  "countryCode": "FR"
}
````
Example of output of the api :
```json
{
  "foxPicture": "https://randomfox.ca/images/19.jpg",
  "catFacts": [
    "Six-toed kittens are so common in Boston and surrounding areas of Massachusetts that experts consider it an established mutation.",
    "The smallest cat on record was a male blue point Himalayan-Persian, named Tinker Toy that measured only 7 cm (2.75 in) tall and 19 cm (7.5 in) long when full grown (aged 2.5 years).",
    "Approximately 80% of orange tabbies are male."
  ],
  "holidays": [
    {
      "date": "2021-01-01",
      "localName": "Jour de l'an",
      "name": "New Year's Day",
      "countryCode": "FR",
      "fixed": true,
      "global": true,
      "counties": null,
      "launchYear": 1967,
      "type": "Public"
    },
    {
      "date": "2021-04-02",
      "localName": "Vendredi saint",
      "name": "Good Friday",
      "countryCode": "FR",
      "fixed": false,
      "global": false,
      "counties": [
        "FR-A",
        "FR-57"
      ],
      "launchYear": null,
      "type": "Public"
    },
    ...
  ]
}
```
If one apy returns an error, replace with null for the value, like so if all api fails :
```json
{
  "foxPicture": null,
  "catFacts": null,
  "holidays": null
}
```

