import React from 'react';
import './Weather.css'
const Weather = props =>

	<div className="row" >
		<ul key={props.city} className="check">
			<li className="city">{props.city}</li>
			<li>{props.dayweather}</li>
			<li>{props.nightweather}</li>
			<li className={ `${props.weatherDescription}.includes("Thunderstorms") ? "thunder" : "sunny"}`}>{props.weatherDescription}</li>
			<li>{props.weatherCategory}</li>
			<li className={`${(props.MaxTemp*5/18) > 10 ? "red" : "blue"}`}>{(props.MaxTemp)}</li>
			<li>{props.MinTemp}</li>
		</ul>
		
	</div>


export default Weather;