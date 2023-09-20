function Todos() {
	// const 

	return (
		<div className="todos">
			<h2 className="todos__title">Items</h2>
			<form className="todos__form form">
				<input className="form__input" type="text" placeholder="Type name here..." required />
				<button className="form__button">Add New</button>
			</form>
			<ul className="todos-list">
				<li className="todos-list__item">
					Test
					<button className="todos-list__item-button">Delete</button>
				</li>
			</ul>
		</div>
	)
}

export default Todos;
