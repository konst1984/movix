import React from "react";
import cn from "../PersonSection.module.scss";
import Img from "../../../components/Img";
import avatar from "../../../assets/avatar.webp";

const Skeleton = () => {
  return (
    <>
      <div className={cn.profile__content}>
        <div className={`${cn.profile__content__photo} skeleton`}>
          <Img src={avatar} />
        </div>
        <div className={`${cn.profile__content__info} ${cn["profile__content__info_skeleton"]}`}>
          {Array(6).fill('skeleton').map((_, index) =>
            <p key={index} className={`${cn["info-item"]} ${cn["info-item_skeleton"]} skeleton`}/>
          )}
          <p className={`${cn["biography_skeleton"]} skeleton`}></p>
          <p className={`${cn["info-item"]} ${cn["info-item_skeleton"]} skeleton`} ></p>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
