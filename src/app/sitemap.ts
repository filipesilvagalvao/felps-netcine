import { topMedia } from '@/api/midias';
import type { MetadataRoute } from 'next';

type Result = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    release_date: string,
    first_air_date: string,
    title: string,
    name: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
type MediaList = {
    page: number,
    results: Result[],
    total_pages: number,
    total_results: number
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

function slugify(text: string) {
    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

     const now = new Date()

    const topMovies: MediaList = await topMedia(1, "movie")

    const resultMovie = topMovies.results

    const moviesUrls: any = resultMovie.map((movie: Result) => (
        {
            url: `${baseUrl}/filmes/${movie.id}/${slugify(movie.title)}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.7
        }
    ))

    const topSeries: MediaList = await topMedia(1, "tv")

    const resultSerie = topSeries.results

    const seriesUrls: any = resultSerie.map((serie: Result) => (
        {
            url: `${baseUrl}/series/${serie.id}/${slugify(serie.name)}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.7
        }
    ))


    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        },
        ...moviesUrls,
        ...seriesUrls
    ]
}