
// Fetch all Series by index
export async function fetchSeriesIndex(index){
    const data = await fetch(`https://api.tvmaze.com/shows/${index}`)
        return data.json()   
}

// Fetch show images
export async function fetchShowImages(){
    const data = await 
    fetch('https://api.tvmaze.com/shows?page=1')
    return data.json()
}


// Season episodes
// A list of episodes in this season. Specials are always included in this list
export async function showSeasonEpisode(){
    const data = await 
    fetch('https://api.tvmaze.com/seasons/1/episodes')
    return data.json()
}

// Show seasons
// A complete list of seasons for the given show. 
// Seasons are returned in ascending order and contain the full information that's known about them.
export async function fetchShowSeason(index){
    const data = await 
    fetch(`https://api.tvmaze.com/shows/${index}/seasons`)
    return data.json()
}


//Show images
//A list of all images available for this show. 
//The image type can be "poster", "banner", "background", "typography",
// or NULL in case of legacy unclassified images. For a definition of these types, 
//please refer to the main image and general image policies.
export async function fetchShowImg(){
    const data = await 
    fetch('https://api.tvmaze.com/shows/1/images')
    return data.json()
}

//Show main information
// Retrieve all primary information for a given show.
// This endpoint allows embedding of additional information. 
//See the section embedding for more information.

export async function showMainInformation(){
    const data = await fetch('https://api.tvmaze.com/shows/1')
    return data.json()
}

// export async function tvmazeApi(){
//     const data = await 
//     fetch('https://www.tvmaze.com/api')
//     .then(res=>res.json());
//     return data
// }