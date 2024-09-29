import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Nav/>
<Routes>
  <Route path="/" element={<h1>product listing component</h1>}/>
  <Route path="/add" element={<h1>add listing component</h1>}/>
  <Route path="/update" element={<h1>update listing component</h1>}/>
  <Route path="/logout" element={<h1>Logout component</h1>}/>
  <Route path="/profile" element={<h1>profile listing component</h1>}/>

</Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
