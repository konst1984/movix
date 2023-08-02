import React, {memo, useEffect, useMemo, useState} from "react";
import { Link, useParams } from "react-router-dom";
import Img from "../Img";
import Rating from "../Rating";
import Genres from "../Genres";
import dayjs from "dayjs";
import PosterFallback from "../../assets/no-poster.jpg";
import LoadingImg from "../../assets/loading.gif";
import { useSelector } from "react-redux";

import cn from "./VideoCard.module.scss";

const VideoCard = memo(({ data, endpoint, classnameCard = "card_flex" }) => {
  const { movieType } = useParams();

  const {
    id,
    poster_path,
    media_type,
    vote_average,
    genre_ids,
    title,
    name,
    release_date,
    first_air_date,
  } = data;

  const urlPoster = useSelector((state) => state.urlBaseForImages.url?.poster);

  const [poster, setPoster] = useState(LoadingImg);

  const posterUrl = useMemo(() => poster_path ? urlPoster && `${urlPoster}${poster_path}` : PosterFallback, [urlPoster]);


  useEffect(() => {
    setPoster(posterUrl);
  }, [posterUrl]);

  return (
    <li key={id} className={`${cn.card} ${cn[classnameCard]}`}>
      <div className={cn.poster}>
        <Link
          to={`/${media_type || endpoint || movieType}/${id}`}
          className="link"
        />
        <Img src={poster} className={"poster_img"} />
        <Rating rating={vote_average?.toFixed(1)} classname="rating_card" />
      </div>
      <div className={cn.text}>
        <span className={cn.title}>{title || name}</span>
        <Genres genresMovie={genre_ids.slice(0, 2)} classname="genres_card" />
        <span className={cn.date}>
          {dayjs(release_date || first_air_date).format("MMM D, YYYY")}
        </span>
      </div>
    </li>
  );
});

export default memo(VideoCard);
