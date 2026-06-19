// import React, { useEffect, useState } from 'react';

// const Treacking = () => {
// 	const [salery, setSalery] = useState(0);
// 	const [username, setUsername] = useState('');
// 	const [render, setRender] = useState(0);
// 	const [name, setName] = useState('');
// 	function getdata() {
// 		const olderuser = JSON.parse(localStorage.getItem('user')) || [];
// 		setUsers(olderuser);
// 	}
// 	const [users, setUsers] = useState([]);
// 	function formhandling(e) {
// 		e.preventDefault();
// 		let sal = Number(salery);
// 		let usernam = username;
// 		let user = {};
// 		if (sal !== 0 && usernam !== '') {
// 			user = {
// 				salery: sal,
// 				username: username,
// 			};
// 			const olderuser = JSON.parse(localStorage.getItem('user')) || [];
// 			const arr = [...olderuser, user];
// 			console.log(olderuser);
// 			setUsers(olderuser);
// 			setRender(render + 1);

// 			localStorage.setItem('user', JSON.stringify(arr));
// 		}
// 	}
// 	useEffect(() => {
// 		getdata();
// 	}, [render]);

// 	const finder = () => {
// 		const user = users.find((item) => item.username === name);

// 		if (!user) {
// 			return <div>User not found</div>;
// 		}

// 		return (
// 			<div>
// 				<div>{user.username}</div>
// 				<div>{user.salery}</div>
// 			</div>
// 		);
// 	};

// 	return (
// 		<div>
// 			<div className="bg-black text-white text-center p-2 ">
// 				Treacking-Finance
// 			</div>

// 			<div>
// 				<input
// 					value={name}
// 					type="search"
// 					name=""
// 					id=""
// 					className="border"
// 					onChange={(e) => {
// 						setName(e.target.value);
// 					}}
// 				/>
// 				<button onClick={finder}>click</button>
// 			</div>
// 			<form
// 				action=""
// 				onSubmit={formhandling}
// 			>
// 				<label htmlFor="">Name</label>
// 				<input
// 					value={username}
// 					className="border outline-none "
// 					type="text"
// 					name=""
// 					id=""
// 					onChange={(e) => {
// 						setUsername(e.target.value);
// 					}}
// 				/>
// 				<label htmlFor="">salery</label>
// 				<input
// 					value={salery}
// 					className="border outline-none "
// 					type="number"
// 					name=""
// 					id=""
// 					onChange={(e) => {
// 						setSalery(e.target.value);
// 					}}
// 				/>
// 				<button>submit</button>
// 			</form>
// 			<div>
// 				{/* {users.map((item, id) => {
// 					return (
// 						<div
// 							key={id}
// 							className="border mt-2"
// 						>
// 							<div>Name: {item.username}</div>
// 							<div> Salery: {item.salery}</div>
// 						</div>
// 					);
// 				})} */}

// 				{finder()}
// 			</div>
// 		</div>
// 	);
// };

// export default Treacking;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const TreackingFinance = () => {
// 	const navigate = useNavigate();
// 	const [name, setName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [salery, setSalery] = useState(0);
// 	const [userdata, setUserdata] = useState([]);
// 	const [render, setRender] = useState(0);
// 	function submithandler(e) {
// 		e.preventDefault();
// 		let Sal = Number(salery);
// 		if (name !== '' && email !== '' && password !== '') {
// 			let user = {
// 				Name: name,
// 				Email: email,
// 				Password: password,
// 				Salery: Sal,
// 				Espense: [],
// 			};

// 			console.log(user);
// 			let arr = [...userdata, user];
// 			localStorage.setItem('users', JSON.stringify(arr));
// 			navigate('/login');
// 			setRender(render + 1);
// 		}
// 	}
// 	useEffect(() => {
// 		let olderdata = localStorage.getItem('users') || '[]';
// 		let data = JSON.parse(olderdata);
// 		console.log(data);
// 		setUserdata(data);
// 	}, [render]);

// 	return (
// 		<div>
// 			<div
// 				onClick={() => {
// 					navigate('/login');
// 				}}
// 			>
// 				login
// 			</div>
// 			<form
// 				action=""
// 				onSubmit={submithandler}
// 			>
// 				<div>
// 					<label>Name</label>
// 					<input
// 						type="text"
// 						name=""
// 						id=""
// 						className="border outline-0 mt-2"
// 						onChange={(e) => {
// 							setName(e.target.value);
// 						}}
// 					/>
// 				</div>
// 				<div>
// 					<label>email</label>
// 					<input
// 						type="text"
// 						name=""
// 						id=""
// 						className="border outline-0 mt-2"
// 						onChange={(e) => {
// 							setEmail(e.target.value);
// 						}}
// 					/>
// 				</div>
// 				<div>
// 					<label>password</label>
// 					<input
// 						type="text"
// 						name=""
// 						id=""
// 						className="border outline-0 mt-2"
// 						onChange={(e) => {
// 							setPassword(e.target.value);
// 						}}
// 					/>
// 				</div>
// 				<div>
// 					<label>salery</label>
// 					<input
// 						type="number"
// 						name=""
// 						id=""
// 						className="border outline-0 mt-2"
// 						onChange={(e) => {
// 							setSalery(e.target.value);
// 						}}
// 					/>
// 				</div>
// 				<button>submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default TreackingFinance;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TreackingFinance = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [userdata, setUserdata] = useState([]);
	const [render, setRender] = useState(0);
	function submithandler(e) {
		e.preventDefault();

		if (name !== '' && email !== '' && password !== '') {
			let user = {
				Name: name,
				Email: email,
				Password: password,
			};

			console.log(user);
			let arr = [...userdata, user];
			localStorage.setItem('users', JSON.stringify(arr));
			navigate('/login');
			setRender(render + 1);
		}
	}
	useEffect(() => {
		let olderdata = localStorage.getItem('users') || '[]';
		let data = JSON.parse(olderdata);
		console.log(data);
		setUserdata(data);
	}, [render]);

	return (
		<div
			style={{
				backgroundImage:
					"url('https://img.magnific.com/premium-vector/global-network-connections-abstract-vector-neural-networks-cyberspace-futuristic-grid-artificial-intelligence-technology-virtual-cyber-dynamic_813854-283.jpg?semt=ais_hybrid&w=740&q=80')",
			}}
			className="h-screen  bg-no-repeat bg-cover bg-center "
		>
			<div className="flex justify-center ">
				<div className=" p-4 flex gap-2">
					<div>
						<img
							className="h-100 w-100"
							src="leftimage.png"
							alt=""
						/>
					</div>
					<form
						action=""
						onSubmit={submithandler}
						className="bg-white p-10"
					>
						<div className="flex justify-center">
							<img
								src="user.jpg"
								alt=""
								className="h-30 w-30"
							/>
						</div>
						<div>
							<input
								placeholder="Name"
								type="text"
								name=""
								id=""
								className="border outline-0 mt-2 px-2"
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>
						<div>
							<input
								type="text"
								name=""
								id=""
								placeholder="Email"
								className="border outline-0 mt-2 px-2"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						<div>
							<input
								placeholder="Password"
								type="password"
								name=""
								id=""
								className="border outline-0 mt-2 px-2"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>

						<div className="bg-black flex justify-center items-center text-amber-50 mt-2 rounded-2xl">
							<button>Submit</button>
						</div>
					</form>
				</div>
			</div>
			<div className="flex justify-center cursor-pointer ">
				<div
					onClick={() => {
						navigate('/login');
					}}
					className="text-white"
				>
					login
				</div>
			</div>
		</div>
	);
};

export default TreackingFinance;
