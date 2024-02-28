import parseOllehResponse from "./ollehResponse";

const testGpt = async (theme) => {
  const url = `https://k7c2e2155cca0a.user-app.krampoline.com/api/testchatgpt?theme=${theme}`;
  
  try {
    // Make a request to the server to get the image
    const response = await fetch(
      url,
      {
        method: "GET",
      }
    );

    // Check if the request was successful
    if (response.ok) {
      const json = await response.json();
      return parseOllehResponse(json);
    } else {
      // Handle the error if the request was not successful
      throw new Error("Failed to get image from server");
    }
  } catch (error) {
    // Handle any other errors that may occur
    console.error(error);
    throw error;
  }
};

export default testGpt;
