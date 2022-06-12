import React from 'react'
import Leader from '../images/image12.png'
export default function Card(props) {
	return (
		<div className='card'>
			<img src={Leader} alt="" />
			<p className='card-stat'><i className='bi bi-star-fill'></i>
				<span>5.0</span>
				<span>60&nbsp;·</span>
				<span>USA</span>
			</p>
			<p className='card-des'>Life lessons with Katie Zaferes.</p>
			<p className='card-footer'><strong>From $136</strong> / person</p>
		</div>
	)
}
