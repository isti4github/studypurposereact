import React from 'react';
import ReactDOM from 'react-dom';

// sample component to illustrate props
class DemoProps extends React.Component{
	render(){
		return(

				<div>
                    <h3>Probs Test</h3>
					{/*accessing information from props */}
					<h2>Hello Your Props Value is:  {this.props.user}</h2>
					
				</div>
			);
	}
}

export default DemoProps;


