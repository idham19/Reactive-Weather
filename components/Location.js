import app from "../App";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/cloudy.svg";
function weatherForcast(forecast) {
  return forecast === "Sunny"
    ? sunny
    : forecast === "Cloudy"
    ? cloudy
    : forecast === "Partly cloudy"
    ? partlyCloudy
    : forecast === "Snowy"
    ? rainy
    : forecast === "Rainy"
    ? rainy
    : null;
}

function Location({ data, location, setLocation }) {
  const cityData = data.find((city) => city.city === location);

  return (
    <div className="card">
      <div>
        <h2>Your Location's weather</h2>
      </div>
      <div className="img-container">
        <img
          className="card-img-top"
          src={weatherForcast(cityData.forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        {/* <h3 className="card-title">{data.city}</h3> */}
        <h5 className="card-text">
          The weather in {cityData.city} is {cityData.temperature}
        </h5>
        <h5 className="card-text"> It is {cityData.forecast} out today</h5>
      </div>
    </div>
  );
}
export default Location;
