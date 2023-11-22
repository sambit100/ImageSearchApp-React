import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (params) => {
  const [response, Setresponse] = useState([]);
  const [isLoading, SetisLoading] = useState(false);
  const [error, Seterror] = useState(" ");
  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url) => {
    try {
      SetisLoading(true);
      const res = await axios(url);

      Setresponse(res.data.results);
    } catch(err){
      Seterror(err);
  } finally {
      SetisLoading(false);
    }
  };


  useEffect(() => {
 fetchData(params);
  }, [params]);



  return {
    response,
    isLoading,
    error,
    fetchData :url=>fetchData(url)
  };
};

export default useAxios;
