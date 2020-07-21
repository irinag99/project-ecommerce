import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import CardProducts from './CardProducts';
import CardSales from './CardSales';
import CardUsers from './CardUsers';
import LastProduct from './LastProduct';
import Categories from './Categories';
import Footer from './Footer';
import Table from './Table';
import { Redirect } from 'react-router-dom'


const Dashboard = () => {

	const [token, setToken] = useState(null)

	useEffect(() => {
		let url = 'http://localhost:3030/api/session';
		axios
			.get(url, {
				headers: {
					token: localStorage.getItem('user')
				}
			})
			.then((data) => {
				console.log(data)
				if (data.data.meta.status===200){
					setToken(localStorage.getItem('user'))
				
				}else{
					setToken(undefined)
				}
			})
			.then(()=>{
				console.log(token)
			})
			.catch(err => {
				console.log('soy un error')
				console.error(err);
			});
	})

	const logOut= () => {
		localStorage.removeItem('user')
		setToken(undefined)
	}


	return (
		<React.Fragment>
			{
				token===undefined && <Redirect to='/login' />
			}
		<div id="wrapper">
			
			{/* Sidebar */}
			<Sidebar />

			<div id="content-wrapper" className="d-flex flex-column">
				{/* Main content */}
				<div id="content">
					<Navbar />

					{/* Page content */}
					<div className="container-fluid">
						{/* Page Heading */}
						<div className="d-sm-flex align-items-center justify-content-between mb-4">
							<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
						</div>

						{/* Row */}
						<div className="row">
							<CardProducts />
							<CardUsers />
							<CardSales />
						</div>

						{/* Row */}
						<div className="row">
							<LastProduct />
							<Categories />
						</div>

						<h1 className="h3 mb-2 text-gray-800">Latest Sales</h1>
						{/* Table */}
						<Table />
					</div>
				</div>
				<button onClick={()=>logOut()} >Log Out</button>
				{/* Footer */}
				<Footer />
			</div>
		</div>
		</React.Fragment>

	)

}

export default Dashboard;
