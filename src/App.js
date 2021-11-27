import Map from './components/Map';
import credentials from './credentials';

function App() {
  return (
    <div className="App">
      <Map
        googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapskey}`}
        containerElement= {<div style={{height:'400px'}}/>}
        mapElement={<div style={{height:'100%'}}/>}
        loadingElement={<p>Cargando</p>}
      />
    </div>
  );
}

export default App;
