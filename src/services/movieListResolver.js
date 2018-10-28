import ForumDocWpService from "./api";
import mediaResolver from "./mediaResolver";

export default async function movieListResolver(movies) {
  return await Promise.all(movies.map(movieResolver));
}

async function movieResolver(movie) {
  return {
    id: movie.id,
    post_date: movie.date,
    slug: movie.slug,
    title: movie.title.rendered,
    categories: movie.movie_cat,
    country: movie.themeum_movie_type,
    content: movie.content.rendered.replace(/<(?:.|\n)*?>/gm, '').substring(0, 75),
    media1: mediaResolver(await ForumDocWpService.getMedia(movie.featured_media)),
    media2: mediaResolver(await ForumDocWpService.getMedia(parseInt(movie.themeum_movie_image_cover, 10))),
    year: movie.themeum_movie_release_year,
    showtime: movie.themeum_showtimes_info && movie.themeum_showtimes_info.length ?
      movie.themeum_showtimes_info.map((info) => {
      return {
        name: info.themeum_movie_theatre_name,
        address: info.themeum_movie_theatre_location,
        time: info.themeum_movie_show_time
      }
    }) : null
  }
}
