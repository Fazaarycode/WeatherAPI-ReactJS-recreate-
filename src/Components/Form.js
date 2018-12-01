import React from 'react';

const Form = props =>
<div style={{marginBottom:"10px"}}>
	<form onSubmit={props.handleSubmit}>
		<input type="text" placeholder="Enter a city a search" name="cityName" />
		<button> Search </button>
	</form>

</div>

export default Form;