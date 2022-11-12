import React, { useState } from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import ReactTooltip from "react-tooltip";
import 'react-dropdown/style.css';
import Modal from "react-modal";

Modal.setAppElement("#root");

const Tool = () => {
	const toolRef = useNav('Tool');

	let url="https://docs.google.com/document/d/1SkNB97ANkPkOcQ53IpB98OxLE0t9H9Hu69QxYFsj82c/edit?usp=sharing";

	const [isOpen2, setIsOpen2] = useState(false);

	function toggleModal2() {
		setIsOpen2(!isOpen2);
	}
	
	const download = () => {};

	const [food, setFood] = useState({
		name: "",
		nutrient: ""
	})
	function handleSubmit() {
		fetch("http://localhost:4999/result", {
			method:"POST",
			cache: "no-cache",
			headers:{
				"content_type":"application/json",
			},
			body:JSON.stringify(food.name)
			}
		).then(response => {
			return response.json()
		}).then(data => {
			setFood({nutrient: data})
		})
	}
	function handleChange(e) {
		setFood({name: e.target.value});
	}
	// useEffect(() => {
    //     fetch('http://localhost:4999/result').then(res => res.json()).then(data => {
	// 		setFood({nutrient: data})});
    // }, []);

	return (
		<section ref={toolRef} id='toolContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?food,healthy meals'
				alt='unsplash-img'
			/>
			<div>
				<h3>Use the search tool to help you make smart decisions on selecting food during pregnancy.</h3>
				<div>
					<div>
						<form onSubmit={handleSubmit} action="http://localhost:4999/result" method="post">
							<h4 data-tip data-for="searchTip">Start Your Search(Hover for instructions):</h4>
							<input type="text" placeholder='Type here...' name="food" onChange={handleChange} value={food.name} />
							<br></br>
							<ReactTooltip id="searchTip" place="right" type="info" effect="solid">
								<p>type in food of your choices</p>
							</ReactTooltip>
							<br></br>
							{/* <input type="submit" value="Search"/> */}
							<button type="submit" >Search</button>
						</form>
						{/* <pre>{JSON.stringify(food.name, 0, 2)}</pre>
						{food && <div>
							<p>{food.nutrient}</p>
							
							</div>
						} */}
						{/* <button onClick={setFoodData("")}>Undo</button> */}
					</div>

					<br></br>
					<a href={url} target="_blank" rel="noreferrer">FAQs</a>
					<br></br>

					<div>
						<h5>Can't find what you want? You can download more resources <button onClick={toggleModal2}>here</button>.
							<Modal
								isOpen={isOpen2}
								onRequestClose={toggleModal2}
								// contentLabel="My dialog"
								className="secondmodal"
								overlayClassName="secondoverlay"
								closeTimeoutMS={500}
							>
								<div>Are you sure you want to download a list of resources?</div>
								<br></br>
								<button onClick={download}>Yes</button>
								<button onClick={toggleModal2}>No</button>
							</Modal>
						</h5>
					</div>

				</div>
			</div>
			
		</section>
	);
};

export default Tool;