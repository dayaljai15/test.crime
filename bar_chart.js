d3.json("/API_endpoint").then(crime_data =>{
// console.log(crime_data)
d3.json("/static/js/final_pop.json").then(data =>{

    var crime_object = {}

crime_data.forEach(crime => {

    if (crime[3]> 64100 && crime[3]<64200){
    // console.log(crime[3])
    if (Object.keys(crime_object).includes(crime[3].toString())){
        crime_object[crime[3]]+= 1    
    }
    else{
        crime_object[crime[3]]= 1
    } 
    // console.log(Object.keys(crime_object))
    }
    
});
// console.log(crime_object)
// console.log(Object.keys(crime_object))


// Trace1 for the Zip Code Data
var trace1 = {
    x: data.map(row => row.zipcode.toString()),
    y: data.map(row => row.population),
    text: data.map(row => row.Population),
    name: "Population",
    type: "bar"
  };
  
  // Trace 2 for the Zip Code Data
  var trace2 = {
    x: Object.keys(crime_object),
    y: Object.values(crime_object),
    text: Object.values(crime_object),
    name: "Crimes",
    type: "bar"
  };
  
  // Combining both traces
  var data = [trace1, trace2];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "Population by Zip Code",
    xaxis: {tickangle:45,
    tickvals:Object.keys(crime_object),
type:"category",
tickfont:{size:6}}
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
})
})