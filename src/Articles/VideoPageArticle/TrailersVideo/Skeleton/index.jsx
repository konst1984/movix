import React from "react";
import cn from '../TrailersVideo.module.scss'
import withSkeletonBox from "../../../../hoc/withSkeletonBox.jsx";

const Skeleton = () => {

  const length = +getComputedStyle(document.querySelector(':root')).getPropertyValue("--count-skeletons-trailers");

  return (
    <div className={cn.skeletons}>
      {new Array(length).fill("skeleton").map((_, index) => (
        <div className={cn['skeleton-card']} key={index}>
          <div className= {`skeleton ${cn.thumb}`}></div>
          <div className= {`skeleton ${cn.row}`}></div>
        </div>
      ))}
    </div>
  );
};

export default withSkeletonBox(Skeleton);

