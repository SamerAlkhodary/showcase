import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HeroPage from './pages/hero/hero';

function App() {
  
  return (
			<Router>
				<Routes>
					<Route exact path='/showcase' element={<HeroPage></HeroPage>}/>
				</Routes>
			</Router>
				
	);
}

export default App
