const ZTP = require("./ztParser") // Import ztParser
ZTP.useBaseURL("https://www.zone-telechargement.homes") // Do not add the last slash !
require('dotenv').config();

ZTP._devMode = true // Enable dev mode (more logs)
ZTP.setMoviesDbToken(process.env.MOVIESDB_API_KEY);

let category = "series" // The category you want to search / list of categories at ZTP._allCategories
// Currently, only "films" is tested, so it may crash or not work properly for other categories
let query = "mercredi" // Your search query

async function __main__() {
    let response1 = await ZTP.search(category, query)

    console.log("Search: ", response1,"\n")
    // console.log("SearchAll: ", await ZTP.searchAll(category, query),"\n")
    console.log("\n\getQueryDatas: ", await ZTP.getQueryDatas(category, response1[0].id),"\n")
}

__main__()