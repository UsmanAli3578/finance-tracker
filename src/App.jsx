import React from 'react';
import TreackingFinance from './pages/Treacking-Finance';
import Login from './pages/Login';
import Userpage from './pages/Userpage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<TreackingFinance />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/userpage/:id"
					element={<Userpage />}
				/>
			</Routes>
		</div>
	);
};

export default App;
