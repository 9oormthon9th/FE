// Import any necessary libraries or modules

// Define the API function
async function getImage() {
  try {
    // Make a request to the server to get the image
    const response = await fetch('/api/image', {
      method: 'GET',
      // Add any necessary headers or parameters
    });

    // Check if the request was successful
    if (response.ok) {
      // Parse the response as an image or do any necessary processing
      const image = await response.blob();
      return image;
    } else {
      // Handle the error if the request was not successful
      throw new Error('Failed to get image from server');
    }
  } catch (error) {
    // Handle any other errors that may occur
    console.error(error);
    throw error;
  }
}

// Export the API function
export default getImage;
