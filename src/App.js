
import './App.css';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
function App() {
  const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
  return (
    <div className="App" style={{width:"100%"}}>
<h1>Lets Build some maps</h1>
<div className='border border-1 w-75 mx-auto'>
<ComposableMap data-tip="">
<Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
</ComposableMap>
</div>
    </div>
  );
}

export default App;
