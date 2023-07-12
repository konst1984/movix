export type TypeUrlParams = {
  change_keys: string[];
  images: {
    backdrop_sizes: ["w300", "w780", "w1280", "original"];
    base_url: "http://image.tmdb.org/t/p/";
    logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"];
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"];
    profile_sizes: ["w45", "w185", "h632", "original"];
    secure_base_url: "https://image.tmdb.org/t/p/";
    still_sizes: ["w92", "w185", "w300", "original"];
  };
};

export type Url = {
  backdrop: string;
  poster: string;
  profile: string;
};
