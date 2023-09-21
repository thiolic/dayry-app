const CommentsItem = ({id, text, color}) => {
	return (
		<li className="comments__listitem" key={id}>
			<span className="comments__listitem-color" style={{ 'background': color}}></span>
			<p className="comments__listitem-text">{text}</p>
		</li>
	)
}

export default CommentsItem;
