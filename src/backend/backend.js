const baseURL = process.env.REACT_APP_BACKEND_URL;
// Maybe baseURL could be https://${hostname}
if (!('REACT_APP_BACKEND_URL' in process.env)) {
  console.error('REACT_APP_BACKEND_URL is not set in .env');
} else {
  console.log('BaseURL:', baseURL);
}

/**
 * @param {string} path ex) `/ready`
 */
const fullURL = (path) => `${baseURL}${path}`;

// TODO: response part is duplicated
const backendAPI = {
  ready: async () => {
    try {
      // Make a request to the server to get the image
      const response = await fetch(fullURL('/ready'), {
        method: 'GET',
      });

      // Check if the request was successful
      if (response.ok) {
        const json = await response.json();
        return {
          valid: true,
          result: json,
        };
      } else {
        // Handle the error if the request was not successful
        throw new Error('Response not OK');
      }
    } catch (error) {
      // Handle any other errors that may occur
      console.error(error);
      throw error;
    }
  },
  courseRecommend: async (themeInput) => {
    const url = fullURL(`/recommend?theme=${themeInput}`);
    try {
      // Make a request to the server to get the image
      const response = await fetch(url, {
        method: 'GET',
      });

      // Check if the request was successful
      if (response.ok) {
        const json = await response.json();
        return {
          valid: true,
          result: json,
        };
      } else {
        // Handle the error if the request was not successful
        throw new Error('Failed to get image from server');
      }
    } catch (error) {
      // Handle any other errors that may occur
      console.error(error);
      return {
        valid: false,
        result: null,
      };
    }
  },
  courseInfo: async (courseId) => {
    try {
      const response = await fetch(fullURL(`/course?id=${courseId}`), {
        method: 'GET',
      });

      // Check if the request was successful
      if (response.ok) {
        const json = await response.json();
        // parseOllehResponse(json);
        return {
          valid: true,
          result: json,
        };
      } else {
        // Handle the error if the request was not successful
        throw new Error('Response not OK');
      }
    } catch (error) {
      // Handle any other errors that may occur
      console.error(error);
      throw error;
    }
  },
  foodParse: async (foodInput) => {
    try {
      const response = await fetch(fullURL(`/food?food=${foodInput}`), {
        method: 'GET',
      });

      // Check if the request was successful
      if (response.ok) {
        const json = await response.json();
        return {
          valid: true,
          result: json,
        };
      } else {
        // Handle the error if the request was not successful
        throw new Error('Response not OK');
      }
    } catch (error) {
      // Handle any other errors that may occur
      console.error(error);
      throw error;
    }
  },
};

export default backendAPI;
