import {
  apiBase,
  apiMovies,
  apiMovie,
  apiMoviesByCategory,
  apiMediaItem
} from "../../config.json";
import movieListResolver from "./movieListResolver";
import movieResolver from "./movieResolver";

export default {
  fetchGet: async function(url, resolver) {
    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      return resolver ? await resolver(responseJson) : responseJson;
    } catch (error) {
      console.error(error);
    }
  },

  getMovies: async function() {
    return await this.fetchGet(apiBase + apiMovies, movieListResolver);
  },

  getSingleMovie: async function(movieId) {
    return await this.fetchGet(apiBase + apiMovie.replace(':id', movieId), movieResolver);
  },

  getMoviesByCategory: async function(categoryId) {
    return await this.fetchGet(apiBase + apiMoviesByCategory.replace(':id', categoryId), movieListResolver);
  },

  getMedia: async function(mediaId) {
    return await this.fetchGet(apiBase + apiMediaItem.replace(':id', mediaId));
  },
}
