import React, { Component } from 'react';

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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';


class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: 1
		}
	}
	componentDidMount(){
		let url = 'http://localhost:3030/api/session';
		fetch(url)
		.then((session) => {
			this.setState({
				user: 'session'
			})
		})
	}
	render() {
		if (this.state.user == null) {
			return (<Redirect to='/login' />)
		}
		return (
			<Router>
				<Switch>
					<Route exact path='/'> <div id="wrapper">
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

					{/* Footer */}
					<Footer />
				</div>
			</div>
			 </Route>
					<Route path='/login'>
						<Login click={this.buscarUsuario}/>
					</Route>
				</Switch>
			</Router>
			
		)
	}
}

export default Dashboard;
