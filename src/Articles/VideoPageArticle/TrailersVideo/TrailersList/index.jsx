import React from 'react';
import Skeleton from "../Skeleton";
import TrailerCard from "../TrailerCard";
import cn from "../TrailersVideo.module.scss";

const TrailersList = ({data, loading}) => {

  return (
    <>
      {loading ?
        (
          <Skeleton data={data}/>
        ) :
        <>
          {data.map((trailer) => (
            <TrailerCard key={trailer.id} data={trailer}/>
          ))}
        </>
      }
    </>
  );
};

export default TrailersList;
