import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label> {label} </label>
			<div>
				<input {...input} />
			</div>
			<div>{touched && error}</div>
		</div>
	);
};
