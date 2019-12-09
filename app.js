// TODO
// var GroceryList = (props) => (
// 	<ul>
// 		<li>{props.items[0]}</li>
// 		<li>{props.items[1]}</li>
//  	<li>{props.items[2]}</li>
// 	</ul>
// );

// var Cheese = () => (
// 	<li>Cheese</li>
// ) 

// var Milk = () => (
// 	<li>Milk</li>
// )

// var App = ()=> (
// 	<div>
// 		<h2>My Grocery List</h2>
// 		<GroceryList items={['Olives', 'Cucumber', 'Lemon']}/>
// 	</div>
// );

// ReactDOM.render(<App />, document.getElementById('app'));


// Class component

class GroceryListItems extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			done: false
		};
	}

	onListItemClick() {
	  	this.setState({
			done: !this.state.done
	  	});
	}

	render() {
		var style = {
			textDecoration: this.state.done ? 'line-through' : 'none'
		};

		return (
			<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
		);
	}
}


var GroceryList = (props) => (
	<ul>
		<h2>My Grocery List</h2>
		{props.items.map(elm => 
			<GroceryListItems item = {elm} />
		)} 
	</ul>
);

var items = ['Olives', 'Cucumber', 'Lemon']

ReactDOM.render(<GroceryList items={items}/>, document.getElementById('app'));

//////////////////////////////////////////////////////////
// Raghda is the Best 