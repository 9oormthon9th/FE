import env from '../env';

/**
 * @param {string} path ex) `/ready`
 */
const getURL = (path) => `${env.baseURL}${path}`;

// TODO: response part is duplicated
const backendAPI = {
  ready: async () => {
    try {
      // Make a request to the server to get the image
      const response = await fetch(getURL('/ready'), {
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
    const url = getURL(`/recommend?theme=${themeInput}`);
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
      const response = await fetch(getURL(`/course?id=${courseId}`), {
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
      const response = await fetch(getURL(`/food?food=${foodInput}`), {
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
