import './App.css';
import Head from './Components/Head';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import SearchPage from './Components/SearchPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Playback from './Components/Playback';

function App() {
  return (
    <>
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path='/' 
          element={<><div className="App">
              <div className="compo">
                <div className="app_sidebar"><Sidebar /></div>
                <div className="app_main"><Main /></div>
              </div>
            </div></>}>
        </Route>
        <Route path='search/:searchTerm' 
          element={<><div className="App">
              <div className="compo">
                <div className="app_sidebar"><Sidebar /></div>
                <div className="app_search"><SearchPage /></div>
              </div>
            </div></>}>
        </Route>
        <Route path='video' 
          element={<><div className="App">
              <div className="app_playback"><Playback /></div>
            </div></>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>

    // <div className="App">
    //   <Head />
    //   <div className="compo">
    //     <div className="app_sidebar"><Sidebar /></div>
    //     <div className="app_main"><Main /></div>
    //   </div>
    //   <div className="hi"></div>
    // </div>
  );
}

export default App;
