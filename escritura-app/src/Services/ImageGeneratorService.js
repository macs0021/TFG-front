import axios from 'axios';

const url = "https://8c32-35-185-128-50.ngrok-free.app";

export async function generateImage(postData) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios.post(`${url}/text2img`, postData, options);
    return response.data;
  } catch (error) {
    
    return error;
  }
}