import React from 'react';

export const homeServices = (props) => {
	return (
		<svg
			x="0px" 
			y="0px"
			viewBox="0 0 50 50"
			className={props.className}
			style={props.style}
			width={props.width ? props.width : "16px"} 
			height={props.height ? props.height : "16px"} 
			fill={props.fill ? props.fill : "#484848"}>
			<g>
				<path d="M5.965,29.682v19.236c0,0.482,0.392,0.876,0.876,0.876h20.645V32.376h9.698v17.418h5.77c0.484,0,0.876-0.394,0.876-0.876     V29.682l-18.921-18.84L5.965,29.682z M21.361,40.49H12.61v-8.113h8.751V40.49z"/>
				<path d="M47.665,22.765L24.898,0l-10.74,10.739V6.013c0-1.104-0.896-2-2-2c-1.104,0-2,0.896-2,2v8.726l-8.027,8.026     c-0.977,0.977-0.977,2.559,0,3.536c0.488,0.488,1.128,0.732,1.768,0.732s1.279-0.244,1.768-0.73l19.232-19.23l19.23,19.229     c0.977,0.978,2.559,0.978,3.534,0C48.64,25.324,48.64,23.741,47.665,22.765z"/>
			</g>
		</svg>
	);
};