/*
 * Info: Get City Weather Data from the API
 */
export const fetchCityWeather = async () => {
  let weatherData = [];
  try {
    const url = 'https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576';
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const resData = await response.json();
      if (Object.keys(resData?.result).length > 0) {
        weatherData = resData.result;
      } else {
        console.error('City Weather API Data has been empty');
      }
    } else {
      throw new Error(`City Weather API Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
  return weatherData;
};

/*
 * Info: Get Featured Destinations Data from the API
 */
export const fetchFeaturedDestinations = async () => {
  let destinationsData = {};
  try {
    const url = 'https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c';
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const resData = await response.json();
      if (Object.keys(resData.result).length > 0) {
        destinationsData = resData.result;
      } else {
        console.error('Featured Destinations API Data has been empty');
      }
    } else {
      throw new Error(`Featured Destinations API Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
  return destinationsData;
};
