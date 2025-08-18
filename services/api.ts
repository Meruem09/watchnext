export const TMBC_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: "application/json", 
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({query} : {query: string}) => {
    const endpoint  = query 
    ?`${TMBC_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${TMBC_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMBC_CONFIG.headers
    });

    if(!response.ok){
        //@ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json()
    return data.results;
}

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    try{
       const response = await fetch(`${TMBC_CONFIG.BASE_URL}/movie/${movieId}`,{
        method: 'GET',
        headers: TMBC_CONFIG.headers,
       })

       if(!response.ok) throw new Error('Failed to fetch movie data');
       
       const data = await response.json();
       return data;

    } catch(error){
        console.error(error);
        throw error;
    }
}

export const fetchMovieVideos = async (movieId: string): Promise<MovieVideos> => {
    try{
       const response = await fetch(`${TMBC_CONFIG.BASE_URL}/movie/${movieId}/videos`,{
        method: 'GET',
        headers: TMBC_CONFIG.headers,
       })

       if(!response.ok) throw new Error('Failed to fetch movie video');
       
       const data: MovieVideos = await response.json();
       return data;

    } catch(error){
        console.error(error);
        throw error;
    }
}


