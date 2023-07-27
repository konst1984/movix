import React from "react";
import { useParams } from "react-router-dom";

import Img from "../../../components/Img";
import { useSelector } from "react-redux";

import Poster from "./Poster";
import { useGetData } from "../../hooks/commonHooks/useGetData.js";
import Skeleton from "./Skeleton";
import Description from "./Desciption/";

import cn from "./VideoDetails.module.scss";
import ErrorElement from "../../../components/ErrorElement";

const VideoDetails = () => {
  const { movieType, id } = useParams();
  const urlBackdrop = useSelector(
    (state) => state.urlBaseForImages.url?.backdrop
  );

  const { data, isLoading, isError, error, isFetching } = useGetData(
    movieType,
    `/${movieType}/${id}`,
    id
  );

  return (
    <ErrorElement isError={isError} error={error} title='Video description'>
      <div className={cn.details}>
        {isLoading || isFetching ? (
          <Skeleton />
        ) : (
          <>
            {data && (
              <>
                <div className={cn.backdrop}>
                  <Img src={urlBackdrop + data?.backdrop_path} />
                </div>
                <div className={cn["opacity-layer"]}></div>
                <div className='wrapper'>
                  <div className={cn.content}>
                    <Poster poster={data.poster_path} />
                    <Description data={data} />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </ErrorElement>
  );
};

export default VideoDetails;