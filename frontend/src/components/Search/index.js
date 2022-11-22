import React, { useState } from 'react';

const Search = () => {
    const [name, setName] = useState("")

	function fetchData() {
		fetch('http://localhost:4999', {
				methods:'GET',
				headers: {
					'Access-Control-Allow-Origin': "*",
					'accept': "application/json"
				}}
		).then(response => response.json()
		).then(data => alert(data.result))
	}

	function postData() {
		fetch('http://localhost:4999/result', {
			method:"POST",
			cache: "no-cache",
			mode: "no-cors",
			headers:{
				"content_type":"application/json",
				'accept': "application/json",
				'Access-Control-Allow-Origin': "*",
				'content-type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Credentials': 'true',
				"Access-Control-Request-Headers": 'Content-Type, Authorization'
			},
			body:JSON.stringify(name)
			}
		).then(response => {
			console.log(response);
		}).catch(err =>{
			console.log(err);
	    })
	}

	function handleSubmit(event) {
		event.preventDefault();
		postData();
		fetchData();
			
	}

	function handleChange(e) {
		setName(e.target.value);
	}

	function handleClear() {
		setName("");
	}

	return (
		<div>
            <form onSubmit={handleSubmit} action="http://localhost:4999/result" method="POST">
				<div>
                	<input type="text" placeholder='Type here...' id='name' name='name' onChange={handleChange}/>
				</div>
				<div>
					<span>
						<button type="submit">Search</button>
						<span> </span>
						<input type="reset" defaultValue="Reset" onClick={handleClear}/>  
					</span>
				</div>
            </form>
        </div>
	);
};

export default Search;