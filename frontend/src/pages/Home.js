import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Home = () => {
	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?food,protein food'
				alt='unsplash-img'
			/>
			<div>
				<h1>Smart Nutrients</h1>
				<p>A healthy pregnancy diet will promote your baby's growth and development. </p>
				<p>During pregnancy, the basic principles of healthy eating remain the same. However, a few nutrients in a pregnancy diet deserve special attention.</p> 
				<p>Smart Nutrients provides a search tool to help pregnant women choose good sources of these essential nutrients, easily and quickly.</p>
			</div>
		</section>
	);
};

export default Home;