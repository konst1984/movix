import React from "react";
import VideoDetails from "../Articles/VideoPageArticle/VideoDetails";
import Actors from "../Articles/VideoPageArticle/Actors";
import TrailersVideo from "../Articles/VideoPageArticle/TrailersVideo";
import SimilarVideos from "../Articles/VideoPageArticle/SimilarVideos";
import RecommendedVideos from "../Articles/VideoPageArticle/RecommendedVideos";

const MovieSinglePage = () => {

  return (
    <>
      <VideoDetails />
      <Actors />
      <TrailersVideo />
      <SimilarVideos />
      <RecommendedVideos />
    </>
  );
};

export default MovieSinglePage;
