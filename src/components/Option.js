import React from 'react';
// we need to import react so we can convert the jsx into javascript (React.createElement())

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button onClick={() => props.handleDeleteOption(props.optionText)}>Remove</button>
		</div>
	);
};

export default Option;
