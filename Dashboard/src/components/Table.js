import React,{Component} from 'react';

// Components
import TableRow from './TableRow';


class Table extends Component{


	constructor(props){
		super(props)
		this.state={
			sales: []
		}
	}
	apiCall(url, consecuencia){
		fetch(url)
		.then(response =>  response.json())
		.then(data =>  consecuencia(data))
	}
	componentDidMount(){
		this.apiCall("http://localhost:3030/api/latestsales", this.ultimasVentas)
	}
	ultimasVentas= data => {
		this.setState({
			sales: data.data
		})
	};
	coponentDidUpdate(){

	} 
	
	render() {
	return (
		<div className="card shadow mb-4">
			<div className="card-body">
				<div className="table-responsive">
					<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
						<thead>
							<tr>
								<th>Name/s</th>
								<th>Quantity</th>
								<th>Price´s</th>
								<th>Total Price</th>
								<th>Date</th>
							
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th>Name/s</th>
								<th>Quantity</th>
								<th>Price´s</th>
								<th>Total Price</th>
								<th>Date</th>
								
							</tr>
						</tfoot>
						<tbody>
							{
								this.state.sales.map(function (sale) {
									return <TableRow key={sale.id} sale={sale} />
								})
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
}
export default Table;



		

	

		
	
	
	


	


	

	



