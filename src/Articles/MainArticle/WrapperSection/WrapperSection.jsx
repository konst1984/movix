import React from 'react';
import SwitchTabs from "../../../components/SwitcherTabsDate/SwitchTabs.jsx";
import {Slider} from "../../../components/Slider/index.jsx";

import cn from './Wrapper.module.scss'

const WrapperSection = ({data,endpointsList,title,loading,endpoint,onTabChange}) => {
  return (
    <div className={cn.carousel}>
      <div className={`${cn.wrapper} wrapper`}>
        <h3 className={cn.carousel__title}>{title}</h3>
        <SwitchTabs data={endpointsList} onTabChange={onTabChange} />
      </div>
      <Slider data={data} loading={loading} endpoint={endpoint}/>
    </div>
  );
};

export default WrapperSection;
