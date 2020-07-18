
import React,{Component} from 'react';
import Category from './Category';

class Categories extends Component{


	constructor(props){
		super(props)
		this.state={
			categories: []
		}
	}
	apiCall(url, consecuencia){
		fetch(url)
		.then(response =>  response.json())
		.then(data =>  consecuencia(data))
	}
	componentDidMount(){
		this.apiCall("http://localhost:3030/api/categories", this.numeroDeProducts)
	}
	numeroDeProducts= data => {
		this.setState({
			categories: data.data
		})
	};
	coponentDidUpdate(){

	} 
	
	render() {
		
		return (
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
					</div>
					<div className="card-body">
						<div className="row">
							
							{
								
							     this.state.categories.map(function (category, idx) {
									return <Category key={idx} categoryName={category.name} />
								})  
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
	
export default Categories;
		
	
	
	


	


	

	



