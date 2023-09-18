import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends Component {
	state = {
		count: 0,
		imgUrl: `https://picsum.photos/200`,
		tags: [`tag1`, `tag2`, `tag3`]
	}

	formatCount = () => {
		const {count} = this.state
		return count === 0 ? 'Zero' : count
	}
	handleClick = product => {
		this.setState({count: this.state.count +1})
		console.log("Clicked")
	}

	render = () => {
		const {imgUrl, tags} = this.state

		let classes = this.getBadgeClasses();

		return (
			<>
				<img src={imgUrl} alt=""/>
				<span className={classes}>{this.formatCount()}</span>
				<button
					onClick={() => this.handleClick(product)}
					className='btn btn-secondary btn-sm'>
					Increment
				</button>
				<ul>
					{this.getListItems(tags)}
				</ul>
			</>
		)

	}

	getListItems(tags) {
		return <>
			{
				tags.length === 0 ?
					"Please add tags" :
					tags.map(tag => (<li key={tag}>{tag}</li>))
			}
		</>;
	}

	getBadgeClasses() {
		let classes = 'badge m-2 '
		classes += this.state.count === 0 ? "bg-warning" : "bg-black"
		return classes;
	}


}

export default Counter