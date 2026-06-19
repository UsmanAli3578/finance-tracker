import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [alldata, setAlldata] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		let userdata = localStorage.getItem('users');
		let data = JSON.parse(userdata);
		console.log(data);
		setAlldata(data);
	}, []);

	function submithandler(e) {
		e.preventDefault();
		alldata.map((item) => {
			if (username == item.Email && password == item.Password) {
				navigate(`/userpage/${item.Name}`);
			}
		});
	}
	return (
		<div
			style={{
				backgroundImage:
					"url('https://img.magnific.com/premium-vector/global-network-connections-abstract-vector-neural-networks-cyberspace-futuristic-grid-artificial-intelligence-technology-virtual-cyber-dynamic_813854-283.jpg?semt=ais_hybrid&w=740&q=80')",
			}}
			className="h-screen  bg-no-repeat bg-cover bg-center flex  justify-center "
		>
			<div className='bg-[white]   flex flex-col items-center p-10 h-[60%] mt-20 rounded-2xl '>
				<div><img src="user2.png" alt="" className='h-30 w-30' /></div>
				<form
					action=""
					onSubmit={submithandler}
				>
					<div>
						
						<input
							type="text"
							name=""
							value={username}
							id=""
							placeholder='Email'
							className="outline-none border mt-2 px-2 "
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div>
						
						<input
							type="password"
							name=""
							id=""
							value={password}
							placeholder='Password'
							className="outline-none border mt-2 px-2 "
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<div className='bg-[#310B3C] text-white flex justify-center mt-2 rounded-2xl'>
						<button>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
