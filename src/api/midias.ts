
const apiKey = process.env.TMDB_API_TOKEN

export const getMedia = async (id_tmdb: string, typeMediaTMDB: "tv" | "movie") => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/${typeMediaTMDB}/${id_tmdb}?language=pt-BR`, options)
    return await response.json()
}

export const getMediaList = async (page: number, typeMediaTMDB: "tv" | "movie") => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/discover/${typeMediaTMDB}?include_adult=false&include_video=false&language=pt-br&page=${page}&sort_by=popularity.desc`, options)
    return await response.json()
}

export const searchMedia = async (queryWord: string) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${queryWord}&include_adult=false&language=pt-br&page=1`, options)
    return await response.json()
}

//Puxa top filmes/séries no backend
export const topMedia = async (page: number, typeMediaTMDB: "tv" | "movie") => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/${typeMediaTMDB}/top_rated?language=pt-br&page=${page}`, options)
    return await response.json()
}

//Puxa a lista filmes/séries no frontend
export const mediaList = async (
    page: number,
    typeMediaTMDB: "tv" | "movie"
) => {
    const response = await fetch(
        `/api/tmdb/media__list?page=${page}&type=${typeMediaTMDB}`
    )

    if (!response.ok) {
        throw new Error("Erro ao buscar mídias")
    }

    return response.json()
}

export const getCategory = async (typeMediaTMDB:"movie"|"tv",id_genre:number,page:number) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/discover/${typeMediaTMDB}?with_genres=${id_genre}&page=${page}`, options)
    return await response.json()
}