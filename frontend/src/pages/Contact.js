import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Contact = () => {
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
				<p><a href="mailto:chubi@oregonstate.edu">Email Me </a></p>
			</div>
		</section>
	);
};

export default Contact;