import React, {useEffect, useState} from 'react';
import ErrorElement from "../ErrorElement/index.jsx";
import {useParams} from "react-router-dom";
import useSwitchTabs from "../../Articles/hooks/commonHooks/useSwitchTabs.js";
import useApi from "../../Articles/hooks/commonHooks/useApi.js";
import VideosCardList from "../VideosCardList/index.jsx";
import Slider from "../Slider";

const SliderBox = ({ title, keyApi, endpoints = [], tabsNames = [], children }) => {

  const { movieType, id } = useParams();

  const [params, setParams] = useState([]);
  const { endpoint, onTabChange } = useSwitchTabs(endpoints);

  const chooseParams = () => {
    setParams(tabsNames.length ? endpoint : [movieType, id]);
  };

  const { data, isLoading, isFetching, isError, error } = useApi()[keyApi](
    ...params
  );

  useEffect(() => {
    chooseParams();
  }, [movieType, id, endpoint]);


  return (
    <ErrorElement isError={isError} error={error} title={title}>
      <Slider data={data?.results} endpoint={endpoint} title={title} tabsNames={tabsNames} onTabChange={onTabChange}>
        {children}
        <VideosCardList
          data={data?.results}
          endpoint={endpoint[0]}
          isFetching={isFetching}
          loading={isLoading}
        />
      </Slider>
    </ErrorElement>
  );
};

export default SliderBox;