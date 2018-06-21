import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({type, color}) => {
	console.log('i got here');
	return (
		<ReactLoading type={type} color={color} height={70} width={35}/>
	);
}

export default Loading;