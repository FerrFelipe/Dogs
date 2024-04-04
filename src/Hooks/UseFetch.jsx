import { func } from 'prop-types';
import React from 'react';

const UseFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json;
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      setError(err.message);
      console.log('asdadasdas');
      json = null;
    } finally {
      setData(json);
      setLoading(false);
      console.log(error);
      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default UseFetch;
