// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f52f386b09mshbe0e67e00392c81p1c5c0ajsn644305edbb9d',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// const getweather=(city)=>{

// 	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
// 	.then(response => response.json())
// 	.then((response) => {
// 		cityname.innerHTML=city
// 		console.log(response)
// 		humidity2.innerHTML= response.humidity
// 		wind_speed2.innerHTML= response.wind_speed
// 		cloud_pct.innerHTML =response.cloud_pct 
// 		temp.innerHTML= response.temp
// 		feels_like.innerHTML= response.feels_like
// 		humidity.innerHTML= response.humidity
// 		min_temp.innerHTML= response.min_temp
// 		max_temp.innerHTML= response.max_temp
// 		wind_speed.innerHTML= response.wind_speed
// 		wind_degrees.innerHTML=response.wind_degrees
// 		sunrise.innerHTML= response.sunrise
// 		sunset.innerHTML=response.sunset
// 	})
// 	.catch(err => console.error(err));	
// }

// submit_btn.addEventListener("click",(e)=>{
//     e.preventDefault()       
// 	getweather(city.value)
// })

// getweather("Delhi")
// // weather of other places
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Punjab', options)
// 	.then(response => response.json())
// 	.then((response) => 
// 	{
// 		// weather of punjab
// 		console.log(response)
// 		cloud_pct1.innerHTML =response.cloud_pct 
// 		feels_like1.innerHTML= response.feels_like
// 		temp1.innerHTML= response.temp
// 		humidity3.innerHTML= response.humidity
// 		min_temp1.innerHTML= response.min_temp
// 		max_temp1.innerHTML= response.max_temp
// 		wind_speed3.innerHTML= response.wind_speed
		
		
	
// 	})
// 	.catch(err => console.error(err));


// 	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=America', options)
// 	.then(response => response.json())
// 	.then((response) => 
// 	{
// 		// weather of america
// 		console.log(response)
// 		cloud_pct2.innerHTML =response.cloud_pct 
// 		feels_like2.innerHTML= response.feels_like
// 		temp2.innerHTML= response.temp
// 		humidity4.innerHTML= response.humidity
// 		min_temp2.innerHTML= response.min_temp
// 		max_temp2.innerHTML= response.max_temp
// 		wind_speed4.innerHTML= response.wind_speed
// 	})
// 	.catch(err => console.error(err));

// 	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Russia', options)
// 	.then(response => response.json())
// 	.then((response) => 
// 	{
// 		// weather of RUSSIA
// 		console.log(response)
// 		cloud_pct3.innerHTML =response.cloud_pct 
// 		feels_like3.innerHTML= response.feels_like
// 		temp3.innerHTML= response.temp
// 		humidity5.innerHTML= response.humidity
// 		min_temp3.innerHTML= response.min_temp
// 		max_temp3.innerHTML= response.max_temp
// 		wind_speed5.innerHTML= response.wind_speed
// 	})
// 	.catch(err => console.error(err));
