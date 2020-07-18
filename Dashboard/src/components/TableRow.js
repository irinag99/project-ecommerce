import React from 'react';

const TableRow = (props) => {
	let {sale} = props;
	console.log(props)
	return (
		<tr>
				<td>
			<ul>
			{props.sale.cart.map(function(e){
			return<li key={e.id}> { e.productName }</li>
			})}
			</ul>
			</td>
			<td>
			<ul>
			{props.sale.cart.map(function(e){
			return<li key={e.id}> { e.quantity }</li>
			})}
			</ul>
			</td>
			<td>
			<ul>
			{props.sale.cart.map(function(e){
			return<li key={e.id}> ${e.quantity * e.price }</li>
			})}
			</ul>
			</td>
			<td>
				${props.sale.total-200}
			</td>
			
			<td>
				{props.sale.updatedAt}
			</td>
			
		</tr>
	)
}

export default TableRow;