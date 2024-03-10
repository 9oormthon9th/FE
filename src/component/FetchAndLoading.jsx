import React, { useState, useEffect } from 'react';

const FetchAndLoading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Make the server request here
      // Replace the URL with your actual server endpoint
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();

      // Once the response is received, stop showing the loading bar
      setIsLoading(false);

      // Do something with the data
      console.log(data);
    };

    fetchData();
  }, []);

  return isLoading ? 'Loading' : children;
};

export default FetchAndLoading;
