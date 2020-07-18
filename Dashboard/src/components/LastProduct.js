import React, { Component } from 'react';
class LastProduct extends Component {

	constructor(props) {
		super(props)
		this.state = {
			LastProduct: []
		}
	}
	apiCall(url, consecuencia) {
		fetch(url)
			.then(response => response.json())
			.then(data => consecuencia(data))
	}
	componentDidMount() {
		this.apiCall("http://localhost:3030/api/lastproduct", this.producto)
	}
	producto = data => {
		this.setState({
			LastProduct: data.data
		})
	};
	coponentDidUpdate() {

	}
	render() {
		return (
			<div className="col-lg-6 mb-4">
				{this.state.LastProduct.map(function (last) {
					return (<div  key={last.name} className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
						</div>
						<div className="card-body">
							<div className="text-center">
							 <p>Nombre:	{last.name}</p>
								<p>Descripcion: {last.description} </p>
								<p>Precio: ${last.price} </p>
							
							</div>
						</div>
					</div>)

				}) 
				}</div>)



		/*  }<Category key={idx} categoryName={category.name} */


	}
}


export default LastProduct;
