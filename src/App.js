
import './App.css';
import { Annotation, ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { PatternCircles,PatternLines } from '@vx/pattern';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
function App() {
  const [show, setShow]= useState("");
  const markers = [
    {markerOffset:30,
    name:"Bangladesh",
  data:230, 
   coordinates: [ 89.399452,20.777176]},
   {markerOffset:-15,
    name:"Brazil",
  data:1004, 
   coordinates: [ -46.625290,-15.533773]},
   {markerOffset:15,
    name:"Congo",
  data:592, 
   coordinates: [10.322447,3.307045]},
   {markerOffset:-15,
    name:"India",
  data:923, 
   coordinates: [80.644800,21.069710]},
   {markerOffset:-15,
    name:"Japan",
  data:30283, 
   coordinates: [138.644800,35.652832]},
   {markerOffset:15,
    name:"South Korea",
  data:19003, 
   coordinates: [127.024612,37.532600]},
   {markerOffset:15,
    name:"United Kingdom",
  data:3029, 
   coordinates: [-0.118092,51.509865]},
   {markerOffset:15,
    name:"Canada",
  data:23233, 
   coordinates: [-79.347015,43.651070]},
   {markerOffset:15,
    name:"United Arab Emirates",
  data:43948, 
   coordinates: [55.296249, 25.276987]}
  ]
  const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
  return (
    <div className="App" style={{width:"100%"}}>
<h1>Lets Build some maps</h1>
<Tooltip style={{backgroundColor:"#6a8c985c"}}>{show}

</Tooltip>
<div className='border border-1 w-75 mx-auto'>

<ComposableMap  data-tip="">


<PatternLines
        id="lines"
        height={6}
        width={6}
    background="white"
    stroke="#ced2d3bc"
        strokeWidth={1}
   
        orientation={["diagonal"]}
      />
<Geographies  geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography   fill="url('#lines')"  key={geo.rsmKey} geography={geo}  />
          ))
        }
      </Geographies>
      {
        markers.map(({name, coordinates, markerOffset, data})=>(
<Marker key={name} coordinates={coordinates} > 
<circle style={{cursor:"pointer"}} onClick={()=>{
           setShow(`Country Name: ${name} ||
           Data Usage:${data}`)
            }} fill={data>5000?"#030c8890":data>1000?"#326cb4c4":data>500?"#1c9cc390":"#5992a766"} stroke={data>5000?"#030c8890":data>1000?"#326cb4c4":data>500?"1c9cc390":"#5992a766"} strokeWidth={1} r={10} />

</Marker>
        ))
      }

</ComposableMap>
</div>
<div className='d-flex justify-content-center'>
<div className='d-flex'>
<p className='me-3'>$ Usage</p>

<div className=' '>
<p style={{width:"300px",height:"10px", backgroundColor:"#2d2195"}}>.</p>
<div className='d-flex'>
<p style={{width:"20px",height:"20px", backgroundColor:"#2d2195"}}>.</p> 
<small>>$5000</small>
</div>

</div>
<div>
<p style={{width:"300px", height:"10px",backgroundColor:"#214895"}}>.</p>
<div className='d-flex'>
<p style={{width:"20px",height:"20px", backgroundColor:"#214895"}}>.</p> 
<small>>$1000</small>
</div>
</div>
<div>
<p style={{width:"300px", height:"10px",backgroundColor:"#48869d"}}>.</p>
<div className='d-flex'>
<p style={{width:"20px",height:"20px", backgroundColor:"#48869d"}}>.</p> 
<small>>$500</small>
</div>
</div>
<div>
<p style={{width:"300px", height:"10px",backgroundColor:"#6a8c98"}}>.</p>
<div className='d-flex'>
<p style={{width:"20px",height:"20px", backgroundColor:"#6a8c98"}}>.</p> 
<small> less than $500</small>
</div>
</div>
</div>
</div>
    </div>
  );
}

export default App;
