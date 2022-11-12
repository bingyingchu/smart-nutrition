import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Contact = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?people,working professional'
				alt='unsplash-img'
			/>
			<div>
				<h3>CONTACT</h3>
				<p>Your feedback is appreciated.</p>
				<p>Feel free to email me <button>here</button></p>
			</div>
		</section>
	);
};

export default Contact;