const Comments = () => {
	return (
		<div className="comments">
			<h2 className="comments__title">Comments #00102094</h2>
			<ul className="comments__list">
				<li className="comments__listitem">
					<span className="comments__listitem-color" style={{ 'background': '#000' }}></span>
					<p className="comments__listitem-text">Lorem</p>
				</li>
				<li className="comments__listitem">
					<span className="comments__listitem-color" style={{ 'background': '#000' }}></span>
					<p className="comments__listitem-text">Lorem</p>
				</li>
			</ul>
			<div className="comments__form">
				<input type="color" className="comments__form-color" />
				<textarea placeholder="Type comment here..." required className="comments__form-field"></textarea>
				<button className="comments__form-button">Add New</button>
			</div>
		</div>
	)
}

export default Comments;
