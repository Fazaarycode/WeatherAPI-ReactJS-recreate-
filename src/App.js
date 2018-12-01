import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Weather from './Components/Weather'
class App extends Component {

state ={
  city: '',
  dayweather: '',
  nightweather: '',
  MaxTemp: '',
  MinTemp: '',
  weatherCategory: '',
  weatherDescription: '',
  Link: '',
 
}

  handleSubmit =async (e) =>{

    e.preventDefault();
    const eventVal = e.target.elements.cityName.value;
    const API_KEY = "MoXz1fKsvswZ1QAYNGJOCx1wAouOgZgN";
    const api_call_locKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${eventVal}&_=1542476520322`)
    const result = await api_call_locKey.json();
    //console.log(result);
    //console.log(result[0].Key);
    //this.setState({})
    const locationID =result[0].Key;

    const api_call_forecast = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationID}?apikey=${API_KEY}&_=1542484105548`);
    const result_temperature = await api_call_forecast.json();

    console.log(result_temperature);

    // dayweather - console.log(result_temperature.DailyForecasts[0].Day.IconPhrase);
    // nightweather - console.log(result_temperature.DailyForecasts[0].Night.IconPhrase);
     console.log(result_temperature.DailyForecasts[0].Temperature.Maximum.Value);
     console.log(result_temperature.DailyForecasts[0].Temperature.Minimum.Value);
     console.log(result_temperature.Headline.Category);
     console.log(result_temperature.Headline.Text);
     console.log(result_temperature.Headline.Link);


     const dayweather = result_temperature.DailyForecasts[0].Day.IconPhrase;
     const nightweather = result_temperature.DailyForecasts[0].Temperature.Minimum.Value;
     const MaxTemp = result_temperature.DailyForecasts[0].Temperature.Maximum.Value;
     const MinTemp =result_temperature.DailyForecasts[0].Temperature.Minimum.Value
     const weatherCategory = result_temperature.Headline.Category;
     const weatherDescription = result_temperature.Headline.Text;
     const Link = result_temperature.Headline.Link;

     this.setState({
            city: '',
            dayweather: dayweather,
            nightweather: nightweather,
            MaxTemp: MaxTemp,
            MinTemp: MinTemp,
            weatherCategory: weatherCategory,
            weatherDescription: weatherDescription,
            Link: Link,

           // DailyForecasts: result_temperature.DailyForecasts
     })

    
     // console.log('From state ' + this.state.DailyForecasts)
     // console.log('Extract state ' + this.state.DailyForecasts[0].Day)

  }
  render() {
    const {
          city,
          dayweather,
          nightweather,
          MaxTemp,
          MinTemp,
          weatherCategory,
          weatherDescription,
          Link
    } = this.state;
    return (
      <div className="App">
        <header className="App-header" style={{marginBottom:"20px"}}>
          Forecast for your city!
        </header>
        <Form handleSubmit = {this.handleSubmit}/>
        <Weather 
            city ={city}
            dayweather={dayweather}
            nightweather={dayweather}
            MaxTemp={MaxTemp}
            MinTemp={MinTemp}
            weatherCategory={weatherCategory}
            weatherDescription={weatherDescription}
            Link={Link}
           // DailyForecasts = {this.state.DailyForecasts}
        />
      </div>
    );
  }
}

export default App;
