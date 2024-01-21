const enviroment = process.env.NODE_ENV;
const baseUrl =
  enviroment === "development"
    ? "http://localhost:5000/weather/api/v1"
    : "https://precious-bonbon-a624d7.netlify.app/api/auth";

export default baseUrl;
