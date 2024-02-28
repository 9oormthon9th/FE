const { hostname } = window.location;

const ready = async () => {
  console.log(hostname);
  try {
    // Make a request to the server to get the image
    const response = await fetch(`https://${hostname}:5000/api/ready`, {
      method: "GET",
      // Add any necessary headers or parameters
    });
    
    console.log(response);

    // Check if the request was successful
    if (response.ok) {
      // Parse the response as an image or do any necessary processing
    } else {
      // Handle the error if the request was not successful
      throw new Error("Failed to get image from server");
    }
  } catch (error) {
    // Handle any other errors that may occur
    console.error(error);
    throw error;
  }
}

export default ready;
