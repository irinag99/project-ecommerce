import React, { Component } from 'react';

// Components
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import CardProducts from './CardProducts';
import CardCategories from './CardCategories';
import CardUsers from './CardUsers';
import LastProduct from './LastProduct';
import Categories from './Categories';
import Footer from './Footer';
import Table from './Table';



class App extends Component {
	
	render () {
		return (
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
								 <CardProducts  />
								 <CardUsers  />
								 <CardCategories  />
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
		)
	}
}

export default App;
