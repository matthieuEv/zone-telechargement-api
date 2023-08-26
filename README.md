# zone-telechargement-api
An API for zone-telechargement built from Scratch.

## ⚠️ Disclaimer
This API is only for educational purposes. I am not responsible for any misuse of this API. Use it at your own risk.

## Table of contents
- [zone-telechargement-api](#zone-telechargement-api)
  - [Table of contents](#table-of-contents)
  - [Documentation](#documentation)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Methods](#methods)
      - [setMoviesDbToken(value)](#setmoviesdbtokenvalue)
      - [useBaseURL(value)](#usebaseurlvalue)
      - [search(category, query, page)](#searchcategory-query-page)
      - [searchAll(category, query)](#searchallcategory-query)
      - [getQueryDatas(categories, id)](#getQueryDatascategories-id)
    - [License](#license)
    - [Author](#author)
    - [Thanks](#thanks)

## Documentation
### Installation
```bash
npm i zt-film-api
```

### Usage
```js
const zt = require('zt-film-api');
require('dotenv').config();
zt.setMoviesDbToken(process.env.MOVIESDB_API_KEY);
```

You must have a `.env` file in the root directory of your project with the following content:
```env
MOVIESDB_API_KEY=<your_api_key>
```
You can get your API key from [here](https://www.themoviedb.org/settings/api).



```js
zt.useBaseURL("<the url>");
```
You can add the url manually, or you can use [this repo](https://github.com/matthieuEv/Zt-url-api) to get the current url.

```js
let category = "" // The category you want to search
// "films" or "series"
let query = "" // The film you want to search

async function __main__() {
    let response1 = await zt.search(category, query)

    console.log("Search: ", response1,"\n")
}

__main__()
```

Here are a full examples:
```js
const ZT = require('zt-film-api');
require('dotenv').config();
ZT.setMoviesDbToken(process.env.MOVIESDB_API_KEY);

ZT.useBaseURL("<the url>");


let category = "films" // The category you want to search

//"films" or "series"

let query = "Interstellar" // Your search query

async function __main__() {
    let response1 = await ZT.search(category, query)

    console.log("Search: ", response1,"\n")
}

__main__()
```
Should output:
```bash
Search:  [
  {
    title: 'Interstellar',
    url: '<url>',
    id: '634',
    image: '<image_url>',
    quality: 'Blu-Ray 1080p',
    language: '(TRUEFRENCH)',
    publishedOn: 2017-02-11T23:00:00.000Z,
    publishedTimestamp: 1486854000000
  },
  {
    title: 'Interstellar',
    url: '<url>',
    id: '2189',
    image: '<image',
    quality: 'DVDRIP',
    language: '(FRENCH)',
    publishedOn: 2017-09-22T22:00:00.000Z,
    publishedTimestamp: 1506117600000
  },
  {
    title: 'Interstellar',
    url: '<url>',
    id: '5895',
    image: '<image',
    quality: 'BDRIP',
    language: '(VOSTFR)',
    publishedOn: 2018-09-30T22:00:00.000Z,
    publishedTimestamp: 1538344800000
  }

  ...
]
```

### Methods
#### setMoviesDbToken(value)
```js
ZT.setMoviesDbToken("your_api_key");
```
Sets the API key for [The Movies Database](https://www.themoviedb.org/).

#### useBaseURL(value)
```js
ZT.useBaseURL("<the url>");
```
Sets the base url for the API. You can use [this repo](https://github.com/matthieuEv/Zt-url-api) to get the current url.

#### search(category, query, page)
```js
let response = await ZT.search(category, query, 1);
```
Searches for a film
`category` is the category you want to search. Currently, only `films` is supported.
`query` is the film you want to search.
`page` is optional, and defaults to `1`.
Data returned:
```js
{
    <film_name>: [
        {
            url: <url>,
            id: <id>,
            image: <image_url>,
            quality: <quality>,
            language: <language>,
            publishedOn: <date>,
            publishedTimestamp: <timestamp>
        }
    ]
}
```

#### searchAll(category, query)
```js
let response = await ZT.searchAll(category, query);
```
Searches for a film in all pages.
`category` is the category you want to search. Currently, only `films` is supported.
`query` is the film you want to search.
Data returned:
```js
{
    <film_name>: [
        {
            url: <url>,
            id: <id>,
            image: <image_url>,
            quality: <quality>,
            language: <language>,
            publishedOn: <date>,
            publishedTimestamp: <timestamp>
        }
    ]
}
```

#### getQueryDatas(categories, id)
```js
let response = await ZT.getQueryDatas(categories, id);
```
Gets the datas of a film.
`categories` is the category of the film. Currently, only `films` is supported.
`id` is the id of the film.
Data returned:
```js
{
    title: <title>,
    language: <language>,
    quality: <quality>,
    size: <size>,
    description: <description>,
    poster: <poster_url>,
    release_date: <release_date>,
    genres: [ <genres> ],
    vote_average: <vote_average>,
    directors: [ <directors> ],
    actors: [ <actors> ],
    downloadLink: {
        <download_website>: <link>
    }
}
```
Example:
```js
//Get the datas of the first film of the search

let response1 = await ZT.searchAll(category, query)
console.log("Search: ", response1,"\n")
console.log("\n\getQueryDatas: ", await ZT.getQueryDatas(category, category, response1[0].id),"\n")
```

### License
[MIT](https://github.com/matthieuEv/zone-telechargement-api/blob/main/LICENSE)

### Author
[MatthieuEv](https://github.com/matthieuEv)

[Sylicium](https://github.com/Sylicium)

### Thanks
I would like to thank [Sylicium](https://github.com/Sylicium) for making the core of this API. I just added some features and made it a npm package. Go check his [repo](https://github.com/Sylicium/zone-telechargement-api) out!