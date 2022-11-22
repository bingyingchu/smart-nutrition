import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import 'react-dropdown/style.css';
import Modal from "react-modal";
import Instructions from "../components/Instructions"
import FAQ from "../components/FAQ"
import Search from '../components/Search';
import Resource from '../components/Resource';

Modal.setAppElement("#root");

const Tool = () => {
	const toolRef = useNav('Tool');

	return (
		<section ref={toolRef} id='toolContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?food,healthy meals'
				alt='unsplash-img'
			/>
			<div>
				<h3>Use the search tool to help you make smart decisions on selecting food during pregnancy.</h3>
				<Instructions />
				<Search />
				<FAQ />
				<Resource /> 
			</div>
		</section>
	);
};

export default Tool;