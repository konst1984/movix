import React, {useState} from 'react';

const useSwitchTabs = (endpoints) => {

  const [endpoint, setEndpoint] = useState([endpoints[0]]);

  const onTabChange = (index) => {
    setEndpoint(!index ? [endpoints[0]] : [endpoints[1]]);
  };

  return {endpoint, onTabChange};
};

export default useSwitchTabs;