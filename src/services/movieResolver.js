import ForumDocWpService from "./api";
import mediaResolver from "./mediaResolver";

export default async function movieResolver(movie) {
  return {
    id: movie.id,
    post_date: movie.date,
    slug: movie.slug,
    title: movie.title.rendered,
    content: movie.content.rendered,
    categories: movie.movie_cat,
    media1: mediaResolver(await ForumDocWpService.getMedia(movie.featured_media)),
    media2: mediaResolver(await ForumDocWpService.getMedia(parseInt(movie.themeum_movie_image_cover, 10))),
    year: movie.themeum_movie_release_year,
    country: movie.themeum_movie_type,
    duration: movie.themeum_movie_length,
    director: movie.themeum_movie_director,
    color: Boolean(parseInt(movie.themeum_release_date, 10)),
    showtime: movie.themeum_showtimes_info && movie.themeum_showtimes_info.length ?
      movie.themeum_showtimes_info.map((info) => {
      return {
        name: info.themeum_movie_theatre_name,
        address: info.themeum_movie_theatre_location,
        time: info.themeum_movie_show_time
      }
    }) : null,
    credits: movie.themeum_movie_info && movie.themeum_movie_info.length ?
      movie.themeum_movie_info.map((info) => {
      return {
        name: info.themeum_movie_info_type,
        description: info.themeum_movie_info_description
      }
    }) : null
  };
}
