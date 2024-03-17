import env from '../env';
import parseOllehResponse from './ollehResponse';

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
  test_course_info: async (themeInput) => {
    const url = getURL(`/test/course?theme=${themeInput}`);
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
          result: parseOllehResponse(json),
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
  gpt_course_info: async (themeInput) => {
    const url = getURL(`/course?theme=${themeInput}`);
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
          result: parseOllehResponse(json),
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
};

export default backendAPI;
