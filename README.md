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
      - [getMovieDatas(categories, id)](#getmoviedatascategories-id)
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
// Currently, only "films" is supported
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
// Currently, only "films" is supported
let query = "Interstellar" // Your search query

async function __main__() {
    let response1 = await ZT.search(category, query)

    console.log("Search: ", response1,"\n")
}

__main__()
```
Should output:
```bash
Search:  {
  Interstellar: [
    {
      url: 'https://www.zone-telechargement.homes/?p=film&id=634-interstellar',
      id: '634',
      image: 'https://www.zone-telechargement.homes//img/films/cc296064e5ea1bdb9820af3b95ad733a.webp',
      quality: 'Blu-Ray 1080p',
      language: '(TRUEFRENCH)',
      publishedOn: 2017-02-11T23:00:00.000Z,
      publishedTimestamp: 1486854000000
    },
    {
      url: 'https://www.zone-telechargement.homes/?p=film&id=2189-interstellar',
      id: '2189',
      image: 'https://www.zone-telechargement.homes//img/films/531de313552e59574fc9f0a8f34473aa.webp',
      quality: 'DVDRIP',
      language: '(FRENCH)',
      publishedOn: 2017-09-22T22:00:00.000Z,
      publishedTimestamp: 1506117600000
    },
    {
      url: 'https://www.zone-telechargement.homes/?p=film&id=5895-interstellar',
      id: '5895',
      image: 'https://www.zone-telechargement.homes//img/films/69e51be46fe03326329e09418daaca35.webp',
      quality: 'BDRIP',
      language: '(VOSTFR)',
      publishedOn: 2018-09-30T22:00:00.000Z,
      publishedTimestamp: 1538344800000
    },
    {
      url: 'https://www.zone-telechargement.homes/?p=film&id=9036-interstellar',
      id: '9036',
      image: 'https://www.zone-telechargement.homes//img/films/9585faeceac44e3a7624d98c268edcc5.webp',
      quality: 'BLURAY REMUX 4K',
      language: '(MULTI (TRUEFRENCH))',
      publishedOn: 2019-03-20T23:00:00.000Z,
      publishedTimestamp: 1553122800000
    },
    {
      url: 'https://www.zone-telechargement.homes/?p=film&id=30038-interstellar',
      id: '30038',
      image: 'https://www.zone-telechargement.homes//img/films/d98b403a9f0d4508126031705d290c95.webp',
      quality: '4K LIGHT',
      language: '(MULTI (FRENCH))',
      publishedOn: 2022-02-03T23:00:00.000Z,
      publishedTimestamp: 1643929200000
    },
    {
      url: 'https://www.zone-telechargement.homes/?p=film&id=33818-interstellar',
      id: '33818',
      image: 'https://www.zone-telechargement.homes//img/films/e835bc140cbf4310865af5653df7da30.webp',
      quality: 'HDLIGHT 1080p',
      language: '(MULTI (TRUEFRENCH))',
      publishedOn: 2022-08-30T22:00:00.000Z,
      publishedTimestamp: 1661896800000
    }
  ]
} 
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

#### getMovieDatas(categories, id)
```js
let response = await ZT.getMovieDatas(categories, id);
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
    let response1 = await ZT.searchAll(category, query)
    console.log("Search: ", response1,"\n")
    console.log("\n\getMovieDatas: ", await ZT.getMovieDatas(category, Object.values(response1)[0][0].id),"\n")
```

### License
[MIT](https://github.com/matthieuEv/zone-telechargement-api/blob/main/LICENSE)

### Author
[MatthieuEv](https://github.com/matthieuEv)

[Sylicium](https://github.com/Sylicium)

### Thanks
I would like to thank [Sylicium](https://github.com/Sylicium) for making the core of this API. I just added some features and made it a npm package. Go check his [repo](https://github.com/Sylicium/zone-telechargement-api) out!