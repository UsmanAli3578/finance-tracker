// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

// const Userpage = () => {
// 	const [alluserdata, setAlluserdata] = useState([]);
// 	const { id } = useParams();
// 	const [catagory, setCatagory] = useState('');
// 	const [expense, setExpense] = useState(0);
// 	const [userdata1, setUserdata1] = useState({});
// 	const name = id;
// 	function submithandler(e) {
// 		e.preventDefault();
// 		alluserdata.map((user) => {
// 			if (name == user.Name) {
// 				let obj = {
// 					Catagory: catagory,
// 					Expense: expense,
// 				};
// 				let arr = [...alluserdata, user.Espense.push(obj)];
// 				localStorage.setItem('users', JSON.stringify(arr));
// 				console.log(user);
// 			}
// 		});
// 	}

// 	function removeuser() {
// 		alluserdata.map((users) => {
// 			return console.log(users);
// 		});
// 		// console.log(user)
// 	}

// 	useEffect(() => {
// 		let userdata = localStorage.getItem('users');
// 		let data = JSON.parse(userdata);
// 		setAlluserdata(data);
// 		console.log(data);
// 		data.map((data) => {
// 			if (name == data.Name) {
// 				setUserdata1(data);
// 			}
// 		});
// 	}, []);

// 	console.log(userdata1);

// 	return (
// 		<div>
// 			{alluserdata.map((item, id) => {
// 				if (name == item.Name) {
// 					return (
// 						<div key={id}>
// 							<div> Name {item.Name}</div>
// 							<div> Salery {item.Salery}</div>
// 							<div>
// 								{item.Espense.map((user) => {
// 									return (
// 										<div className="flex gap-2">
// 											<div>{user.Catagory}</div>
// 											<div>{user.Expense}</div>
// 											<button
// 												onClick={() => {
// 													removeuser();
// 												}}
// 											>
// 												Remove
// 											</button>
// 										</div>
// 									);
// 								})}
// 							</div>
// 						</div>
// 					);
// 				}
// 			})}
// 			<div>
// 				<form
// 					action=""
// 					onSubmit={submithandler}
// 				>
// 					<div>
// 						<label htmlFor="">Catagory</label>
// 						<input
// 							type="text"
// 							className="border outline-none"
// 							onChange={(e) => {
// 								setCatagory(e.target.value);
// 							}}
// 						/>
// 					</div>
// 					<div>
// 						<label htmlFor="">Price</label>
// 						<input
// 							type="number"
// 							className="border outline-none"
// 							onChange={(e) => {
// 								setExpense(e.target.value);
// 							}}
// 						/>
// 					</div>
// 					<button>submit</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Userpage;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

// const Userpage = () => {
// 	const [alluserdata, setAlluserdata] = useState([]);
// 	const { id } = useParams();
// 	const [catagory, setCatagory] = useState('');
// 	const [expense, setExpense] = useState(0);
// 	const [userdata1, setUserdata1] = useState({});
// 	const [render, setRender] = useState(0);
// 	const name = id;
// 	function submithandler(e) {
// 		e.preventDefault();
// 		// alluserdata.map((user) => {
// 		// 	if (name == user.Name) {
// 		// 		let obj = {
// 		// 			Catagory: catagory,
// 		// 			Expense: expense,
// 		// 		};
// 		// 		let arr = [...alluserdata, user.Espense.push(obj)];
// 		// 		localStorage.setItem('users', JSON.stringify(arr));
// 		// 		console.log(user);
// 		// 	}
// 		// });

// 		if (catagory !== '' && expense !== 0) {
// 			userdata1.Espense;
// 			let obj = {
// 				Catagory: catagory,
// 				Expense: expense,
// 			};
// 			userdata1.Espense.push(obj);
// 			let arr = [...alluserdata, userdata1];
// 			localStorage.setItem('users', JSON.stringify(arr));
// 			setRender(render + 1);
// 			console.log(userdata1);
// 		} else {
// 			console.log('enter full data');
// 		}
// 	}

// 	function removeuser(i) {
// 		let newdata = userdata1.Espense.filter((data, id) => {
// 			return i !== id;
// 		});
// 		userdata1.Espense = newdata;
// 		console.log(userdata1);
// 		let arr = [alluserdata];
// 		localStorage.setItem('users', JSON.stringify(arr));
// 		setRender(render + 1);
// 	}

// 	useEffect(() => {
// 		let userdata = localStorage.getItem('users');
// 		let data = JSON.parse(userdata);
// 		setAlluserdata(data);
// 		// console.log(data);
// 		data.map((data) => {
// 			if (name == data.Name) {
// 				setUserdata1(data);
// 			}
// 		});
// 	}, [render]);

// 	// console.log(userdata1);

// 	return (
// 		<div>
// 			<div>
// 				<div>{userdata1.Name}</div>
// 				<div>{userdata1.Salery}</div>
// 			</div>
// 			<div>
// 				{userdata1?.Espense?.map((data, i) => {
// 					return (
// 						<div className="flex gap-2 border mt-2">
// 							<div>{data.Catagory}</div>
// 							<div>{data.Expense}</div>
// 							<div>
// 								<button
// 									onClick={() => {
// 										removeuser(i);
// 									}}
// 									className="border active:scale-90"
// 								>
// 									click
// 								</button>
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</div>
// 			<div>
// 				<form
// 					action=""
// 					onSubmit={submithandler}
// 				>
// 					<div>
// 						<label htmlFor="">Catagory</label>
// 						<input
// 							type="text"
// 							className="border outline-none"
// 							onChange={(e) => {
// 								setCatagory(e.target.value);
// 							}}
// 						/>
// 					</div>
// 					<div>
// 						<label htmlFor="">Price</label>
// 						<input
// 							type="number"
// 							className="border outline-none"
// 							onChange={(e) => {
// 								setExpense(e.target.value);
// 							}}
// 						/>
// 					</div>
// 					<button>submit</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Userpage;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

// const Userpage = () => {
// 	const [editcatagory, setEditcatagory] = useState('');
// 	const [editprice, setEditprice] = useState(0);
// 	const [catagory, setCatagory] = useState('');
// 	const [render, setRender] = useState(0);
// 	const [userdata, setUserdata] = useState([]);
// 	const [totals, setTotals] = useState(0);
// 	const [salery, setSalery] = useState(0);
// 	const [getsalery, setGetsalery] = useState({});
// 	const [price, setPrice] = useState(0);
// 	const { id } = useParams();
// 	function submithandler(e) {
// 		e.preventDefault();
// 		let pric = Number(price);
// 		let Expense = {
// 			user: id,
// 			Catagory: catagory,
// 			Price: pric,
// 		};

// 		let arr = [...userdata, Expense];
// 		localStorage.setItem('Expense', JSON.stringify(arr));
// 		setRender(render + 1);
// 	}
// 	function editsubmit() {}
// 	function salerysub(e) {
// 		e.preventDefault();
// 		let sal = Number(salery);
// 		let user = {
// 			user: id,
// 			Salery: sal,
// 		};
// 		localStorage.setItem(id, JSON.stringify(user));
// 		setRender(render + 1);
// 	}
// 	function remove(i) {
// 		let updateexpense = userdata.filter((item, idx) => {
// 			return i !== idx;
// 		});
// 		localStorage.setItem('Expense', JSON.stringify(updateexpense));
// 		setRender(render + 1);
// 	}
// 	function edit(item, i) {
// 		let olddata = localStorage.getItem('Expense');
// 		let data = JSON.parse(olddata);
// 		// let arr = data.filter((name, idx) => {
// 		// 	return idx !== i;
// 		// });
// 		// console.log(data);
// 		// console.log(arr);
// 		item.Catagory = editcatagory;
// 		item.Price = Number(editprice);
// 		console.log(item);
// 		let newdata = data.toSpliced(i, 1, item);
// 		console.log(data);
// 		console.log(newdata);
// 		// arr.push(item);
// 		// console.log(arr);
// 		localStorage.setItem('Expense', JSON.stringify(newdata));
// 		setRender(render + 1);
// 	}
// 	useEffect(() => {
// 		let olderdata = localStorage.getItem('Expense') || '[]';
// 		let data = JSON.parse(olderdata);
// 		console.log(data);
// 		setUserdata(data);
// 		let salerydata = JSON.parse(localStorage.getItem(id));
// 		console.log(salerydata);
// 		setGetsalery(salerydata);
// 		let total = data.reduce((curr, next) => {
// 			if (next.user == id) {
// 				return curr + next.Price;
// 			} else {
// 				return curr;
// 			}
// 		}, 0);
// 		setTotals(total);
// 		console.log(total);
// 	}, [render]);

// 	return (
// 		<div>
// 			<div>{id}</div>
// 			<div> Salery {getsalery.Salery}</div>
// 			<div> RemainingSalery {getsalery.Salery - totals}</div>

// 			<div>
// 				<form
// 					action=""
// 					onSubmit={salerysub}
// 				>
// 					<div>
// 						<label htmlFor="">Salery</label>
// 						<input
// 							type="number"
// 							name=""
// 							id=""
// 							className="border outline-none"
// 							onChange={(e) => {
// 								setSalery(e.target.value);
// 							}}
// 						/>
// 						<button>submit</button>
// 					</div>
// 				</form>
// 			</div>
// 			<form
// 				action=""
// 				onSubmit={submithandler}
// 			>
// 				<div>
// 					<label htmlFor="">Catagory</label>
// 					<input
// 						type="text"
// 						className="border outline-none"
// 						onChange={(e) => {
// 							setCatagory(e.target.value);
// 						}}
// 					/>
// 				</div>
// 				<div>
// 					<label htmlFor="">Price</label>
// 					<input
// 						type="number"
// 						className="border outline-none"
// 						onChange={(e) => {
// 							setPrice(e.target.value);
// 						}}
// 					/>
// 				</div>
// 				<button>submit</button>
// 			</form>

// 			<div>
// 				{userdata.map((item, i) => {
// 					if (item.user == id) {
// 						return (
// 							<div
// 								className="flex gap-2"
// 								key={i}
// 							>
// 								<div>{item.Catagory}</div>
// 								<div>{item.Price}</div>
// 								<button
// 									onClick={() => {
// 										remove(i);
// 									}}
// 								>
// 									remove
// 								</button>
// 								<button
// 									onClick={() => {
// 										edit(item, i);
// 									}}
// 								>
// 									Edit
// 								</button>
// 							</div>
// 						);
// 					}
// 				})}
// 			</div>

// 			<div>
// 				<form
// 					action=""
// 					onSubmit={editsubmit}
// 				>
// 					<div>
// 						<label htmlFor="">Catagory</label>
// 						<input
// 							type="text"
// 							name=""
// 							id=""
// 							className="border  outline-none px-1 "
// 							onChange={(e) => {
// 								setEditcatagory(e.target.value);
// 							}}
// 						/>
// 					</div>
// 					<div>
// 						<label htmlFor="">Price</label>
// 						<input
// 							type="number"
// 							name=""
// 							id=""
// 							className="border  outline-none px-1"
// 							onChange={(e) => {
// 								setEditprice(e.target.value);
// 							}}
// 						/>
// 					</div>
// 					<button>submit</button>
// 				</form>
// 			</div>
// 			<div>Total {totals}</div>
// 		</div>
// 	);
// };

// export default Userpage;

// import React, { useEffect, useState } from 'react';
// import { ServerRouter, useParams } from 'react-router-dom';
// import Card from '../component/Card';
// import { SlArrowDownCircle } from 'react-icons/sl';
// import { SlArrowUpCircle } from 'react-icons/sl';
// import { AiTwotoneDelete } from 'react-icons/ai';
// import { FaArrowTrendUp } from 'react-icons/fa6';
// import { FaArrowTrendDown } from 'react-icons/fa6';
// import { IoWalletOutline } from 'react-icons/io5';

// const Userpage = () => {
// 	const { id } = useParams();
// 	const [title, setTitle] = useState('');
// 	const [catagory, setCatagory] = useState('');
// 	const [amount, setAmount] = useState(0);
// 	const [userExpense, setUserExpense] = useState([]);
// 	const [userIcome, setUserIcome] = useState([]);
// 	const [render, setRender] = useState(0);
// 	const [date, setDate] = useState('');
// 	const [totalExpense, setTotalExpense] = useState(0);
// 	const [totalIncome, setTotalIncome] = useState(0);
// 	const [remainingAmount, setRemainingAmount] = useState(0);
// 	function incomeSubmit(e) {
// 		e.preventDefault();
// 		let amo = Number(amount);
// 		let Ctitle =
// 			title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
// 		let Ccatagory =
// 			catagory.charAt(0).toUpperCase() + catagory.slice(1).toLowerCase();
// 		let userData = {
// 			ID: id,
// 			Title: Ctitle,
// 			Catagory: Ccatagory,
// 			Amount: amo,
// 			Dat: date,
// 		};
// 		let arr = [];
// 		arr.push(userData);
// 		if (catagory == 'income') {
// 			// console.log('Income', arr);
// 			let olddata = JSON.parse(localStorage.getItem('Income') || '[]');
// 			arr = [...olddata, userData];
// 			localStorage.setItem('Income', JSON.stringify(arr));
// 			setTitle('');
// 			setCatagory('');
// 			setAmount(0);
// 			setDate('');
// 			setRender(render + 1);
// 		} else {
// 			console.log('Expense', userData);
// 			let olddata = JSON.parse(localStorage.getItem('Expense') || '[]');
// 			arr = [...olddata, userData];

// 			localStorage.setItem('Expense', JSON.stringify(arr));
// 			setTitle('');
// 			setCatagory('');
// 			setAmount(0);
// 			setDate('');

// 			setRender(render + 1);
// 		}
// 	}
// 	function remove(data, i) {
// 		if (data.Catagory == 'Expense') {
// 			let newarr = userExpense.toSpliced(i, 1);
// 			localStorage.setItem('Expense', JSON.stringify(newarr));
// 			console.log(newarr);
// 			setRender(render + 1);
// 		} else {
// 			let newarr = userIcome.toSpliced(i, 1);
// 			localStorage.setItem('Income', JSON.stringify(newarr));
// 			setRender(render + 1);

// 			console.log(newarr);
// 		}
// 	}
// 	useEffect(() => {
// 		let IncomeData = JSON.parse(localStorage.getItem('Income'));
// 		let ExpenseData = JSON.parse(localStorage.getItem('Expense'));
// 		let newarrE = ExpenseData?.filter((data) => {
// 			return data.ID == id;
// 		});
// 		let newarrI = IncomeData?.filter((data) => {
// 			return data.ID == id;
// 		});
// 		console.log(newarrE);
// 		setUserExpense(newarrE);
// 		setUserIcome(newarrI);
// 		let TotalExpense = newarrE?.reduce((curr, next) => {
// 			return curr + next.Amount;
// 		}, 0);
// 		let TotalIncome = newarrI?.reduce((curr, next) => {
// 			return curr + next.Amount;
// 		}, 0);
// 		setTotalExpense(TotalExpense);
// 		setTotalIncome(TotalIncome);
// 		console.log(TotalIncome);
// 		let remainingAmount = TotalIncome - TotalExpense;
// 		console.log(remainingAmount);
// 		setRemainingAmount(remainingAmount);
// 		// console.log(IncomeData);
// 		// console.log(ExpenseData);
// 	}, [render]);

// 	return (
// 		<div className="bg-[#F8F9FB]">
// 			<div className="flex flex-col items-center">
// 				<div className="font-black text-2xl">
// 					Personal Finance Tracker
// 				</div>
// 				<div className="text-xs text-gray-400">
// 					Track your income and expense in one place
// 				</div>
// 			</div>
// 			<div className=" p-3 flex justify-center">
// 				<form
// 					action=""
// 					className="flex justify-center items-center  gap-2  bg-[white] border-b-6 border-r-2 border-l-2 border-[#EAEBED]  p-10 rounded-2xl "
// 					onSubmit={incomeSubmit}
// 				>
// 					<div>
// 						<div className=" font-bold">Title</div>
// 						<input
// 							type="text"
// 							value={title}
// 							placeholder="Title"
// 							className="px-2 outline-none border"
// 							onChange={(e) => {
// 								setTitle(e.target.value);
// 							}}
// 						/>
// 					</div>
// 					<div>
// 						<div className=" font-bold">Catagory</div>
// 						<input
// 							type="text"
// 							value={catagory}
// 							placeholder="Catagory"
// 							className="px-2 outline-none border"
// 							onChange={(e) => {
// 								setCatagory(e.target.value);
// 							}}
// 						/>
// 					</div>
// 					<div>
// 						<div className=" font-bold">Amount</div>
// 						<input
// 							type="number"
// 							value={amount}
// 							className="px-2 outline-none border"
// 							onChange={(e) => {
// 								setAmount(e.target.value);
// 							}}
// 						/>
// 					</div>

// 					<div>
// 						<div className=" font-bold">Date</div>
// 						<input
// 							type="date"
// 							value={date}
// 							className="border px-8"
// 							name=""
// 							id=""
// 							onChange={(e) => {
// 								setDate(e.target.value);
// 							}}
// 						/>
// 					</div>
// 					<div className="h-12 flex items-end ">
// 						<button className="bg-green-400 px-2 rounded text-white active:scale-90 ">
// 							+ Add Entery
// 						</button>
// 					</div>
// 				</form>
// 			</div>

// 			<div className=" grid grid-cols-3 p-10  gap-2">
// 				<div className="bg-[#F3FCF6] border rounded-lg flex gap-2 items-center p-6 text-[#067F41] pr-20 ">
// 					<div className="bg-[#E5F7EC] text-3xl p-3 rounded-4xl  ">
// 						<FaArrowTrendUp />
// 					</div>
// 					<div>
// 						<div>Total Income</div>
// 						<div className="font-bold text-2xl">{totalIncome}</div>
// 					</div>
// 				</div>
// 				<div className="bg-[#FDF4F4] border rounded-lg flex gap-2 items-center p-4 text-[#C4120F] pr-20 ">
// 					<div className="bg-[#FEE8E9] text-3xl p-3 rounded-4xl  ">
// 						<FaArrowTrendDown />
// 					</div>
// 					<div>
// 						<div>Total Expense</div>
// 						<div className="font-bold text-2xl">{totalExpense}</div>
// 					</div>
// 				</div>
// 				<div className="bg-[#F7F8FE] border rounded-lg flex gap-2 items-center p-4 text-[#3C62C0] pr-20 ">
// 					<div className="bg-[#EBEFFB] text-3xl p-3 rounded-4xl  ">
// 						<IoWalletOutline />
// 					</div>
// 					<div>
// 						<div>Total Remaining Amount</div>
// 						<div className="font-bold text-2xl">
// 							{remainingAmount}
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="flex px-10 ">
// 				<div className="w-[50%]">
// 					<div className=" bg-[#EFFAF3] border-l-2 border-[#20B55E]">
// 						<div className="flex items-center gap-2 text-[#18AA54] ml-2 font-semibold">
// 							{' '}
// 							<SlArrowDownCircle /> Income{' '}
// 						</div>
// 						<div className="px-2">
// 							{userIcome?.map((data, i) => {
// 								return (
// 									<div className="mt-2 bg-white px-2">
// 										{' '}
// 										<Card
// 											title={data.Title}
// 											catagory={data.Catagory}
// 											amount={data.Amount}
// 											date={data.Dat}
// 											t="text-[#18AA54]"
// 										/>
// 										<button
// 											onClick={() => {
// 												remove(data, i);
// 											}}
// 										>
// 											<AiTwotoneDelete />
// 										</button>
// 									</div>
// 								);
// 							})}
// 						</div>
// 						<div className="text-center font-semibold text-[#49B471]">
// 							Total Income: {totalIncome}
// 						</div>
// 					</div>
// 				</div>
// 				<div className=" w-[50%] ">
// 					<div className="bg-[#FDF4F4] border-l-2 border-[#C4120F]">
// 						<div className="font-semibold text-[#C4120F] flex items-center gap-2 ml-2  ">
// 							{' '}
// 							<SlArrowUpCircle /> Expense
// 						</div>
// 						<div className="px-2">
// 							{userExpense?.map((data, i) => {
// 								return (
// 									<div className=" bg-white px-2 mt-2">
// 										{' '}
// 										<Card
// 											title={data.Title}
// 											catagory={data.Catagory}
// 											amount={data.Amount}
// 											date={data.Dat}
// 											index={i}
// 											t="text-[#F7615D]"
// 										/>
// 										<button
// 											onClick={() => {
// 												remove(data, i);
// 											}}
// 										>
// 											<AiTwotoneDelete />
// 										</button>
// 									</div>
// 								);
// 							})}
// 						</div>
// 						<div className="text-center font-semibold text-[#f64241] ">
// 							Total Expense {totalExpense}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="text-center font-semibold text-blue-600">
// 				Remaining-Amount {remainingAmount}
// 			</div>

// 		</div>
// 	);
// };

// export default Userpage;

import React, { useEffect, useState } from 'react';
import { ServerRouter, useParams } from 'react-router-dom';
import Card from '../component/Card';
import { SlArrowDownCircle } from 'react-icons/sl';
import { SlArrowUpCircle } from 'react-icons/sl';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { FaArrowTrendDown } from 'react-icons/fa6';
import { IoWalletOutline } from 'react-icons/io5';

const Userpage = () => {
	const { id } = useParams();
	const [title, setTitle] = useState('');
	const [catagory, setCatagory] = useState('');
	const [amount, setAmount] = useState(0);
	const [userExpense, setUserExpense] = useState([]);
	const [userIcome, setUserIcome] = useState([]);
	const [render, setRender] = useState(0);
	const [date, setDate] = useState('');
	const [totalExpense, setTotalExpense] = useState(0);
	const [totalIncome, setTotalIncome] = useState(0);
	const [remainingAmount, setRemainingAmount] = useState(0);
	function incomeSubmit(e) {
		e.preventDefault();
		let amo = Number(amount);
		let Ctitle =
			title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
		let Ccatagory =
			catagory.charAt(0).toUpperCase() + catagory.slice(1).toLowerCase();
		let userData = {
			ID: id,
			Title: Ctitle,
			Catagory: Ccatagory,
			Amount: amo,
			Dat: date,
		};
		let arr = [];
		arr.push(userData);
		if (catagory == 'income') {
			// console.log('Income', arr);
			let olddata = JSON.parse(localStorage.getItem('Income') || '[]');
			arr = [...olddata, userData];
			localStorage.setItem('Income', JSON.stringify(arr));
			setTitle('');
			setCatagory('');
			setAmount(0);
			setDate('');
			setRender(render + 1);
		} else {
			console.log('Expense', userData);
			let olddata = JSON.parse(localStorage.getItem('Expense') || '[]');
			arr = [...olddata, userData];

			localStorage.setItem('Expense', JSON.stringify(arr));
			setTitle('');
			setCatagory('');
			setAmount(0);
			setDate('');

			setRender(render + 1);
		}
	}
	function remove(data, i) {
		if (data.Catagory == 'Expense') {
			let newarr = userExpense.toSpliced(i, 1);
			localStorage.setItem('Expense', JSON.stringify(newarr));
			console.log(newarr);
			setRender(render + 1);
		} else {
			let newarr = userIcome.toSpliced(i, 1);
			localStorage.setItem('Income', JSON.stringify(newarr));
			setRender(render + 1);

			console.log(newarr);
		}
	}
	useEffect(() => {
		let IncomeData = JSON.parse(localStorage.getItem('Income'));
		let ExpenseData = JSON.parse(localStorage.getItem('Expense'));
		let newarrE = ExpenseData?.filter((data) => {
			return data.ID == id;
		});
		let newarrI = IncomeData?.filter((data) => {
			return data.ID == id;
		});
		console.log(newarrE);
		setUserExpense(newarrE);
		setUserIcome(newarrI);
		// let TotalExpense = newarrE?.reduce((curr, next) => {
		// 	return curr + next.Amount;
		// }, 0);
		let TotalExpense = (newarrE ?? []).reduce((curr, next) => {
			return curr + next.Amount;
		}, 0);
		// let TotalIncome = newarrI?.reduce((curr, next) => {
		// 	return curr + next.Amount;
		// }, 0);
		let TotalIncome = (newarrI ?? []).reduce((curr, next) => {
			return curr + next.Amount;
		}, 0);
		setTotalExpense(TotalExpense);
		setTotalIncome(TotalIncome);
		console.log(TotalIncome);
		let remainingAmount = TotalIncome - TotalExpense;
		console.log(remainingAmount);
		setRemainingAmount(remainingAmount);
		// console.log(IncomeData);
		// console.log(ExpenseData);
	}, [render]);

	return (
		<div className="bg-[#F8F9FB]">
			<div className="flex flex-col items-center">
				<div className="font-black text-2xl">
					Personal Finance Tracker
				</div>
				<div className="text-xs text-gray-400">
					Track your income and expense in one place
				</div>
			</div>
			<div className=" p-3 flex justify-center">
				<form
					action=""
					className="flex justify-center items-center  gap-2  bg-[white] border-b-6 border-r-2 border-l-2 border-[#EAEBED]  p-10 rounded-2xl "
					onSubmit={incomeSubmit}
				>
					<div>
						<div className=" font-bold">Title</div>
						<input
							type="text"
							value={title}
							placeholder="Title"
							className="px-2 outline-none border"
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</div>
					<div>
						<div className="font-bold">Category</div>
						<select
							value={catagory}
							onChange={(e) => setCatagory(e.target.value)}
							className="border"
						>
							<option value="">Select Category</option>
							<option value="income">Income</option>
							<option value="expense">Expense</option>
						</select>
					</div>
					<div>
						<div className=" font-bold">Amount</div>
						<input
							type="number"
							value={amount}
							className="px-2 outline-none border"
							onChange={(e) => {
								setAmount(e.target.value);
							}}
						/>
					</div>

					<div>
						<div className=" font-bold">Date</div>
						<input
							type="date"
							value={date}
							className="border px-8"
							name=""
							id=""
							onChange={(e) => {
								setDate(e.target.value);
							}}
						/>
					</div>
					<div className="h-12 flex items-end ">
						<button className="bg-green-400 px-2 rounded text-white active:scale-90 ">
							+ Add Entery
						</button>
					</div>
				</form>
			</div>

			<div className=" grid grid-cols-3 p-10  gap-2">
				<div className="bg-[#F3FCF6] border rounded-lg flex gap-2 items-center p-6 text-[#067F41] pr-20 ">
					<div className="bg-[#E5F7EC] text-3xl p-3 rounded-4xl  ">
						<FaArrowTrendUp />
					</div>
					<div>
						<div>Total Income</div>
						<div className="font-bold text-2xl">{totalIncome}</div>
					</div>
				</div>
				<div className="bg-[#FDF4F4] border rounded-lg flex gap-2 items-center p-4 text-[#C4120F] pr-20 ">
					<div className="bg-[#FEE8E9] text-3xl p-3 rounded-4xl  ">
						<FaArrowTrendDown />
					</div>
					<div>
						<div>Total Expense</div>
						<div className="font-bold text-2xl">{totalExpense}</div>
					</div>
				</div>
				<div className="bg-[#F7F8FE] border rounded-lg flex gap-2 items-center p-4 text-[#3C62C0] pr-20 ">
					<div className="bg-[#EBEFFB] text-3xl p-3 rounded-4xl  ">
						<IoWalletOutline />
					</div>
					<div>
						<div>Total Remaining Amount</div>
						<div className="font-bold text-2xl">
							{remainingAmount}
						</div>
					</div>
				</div>
			</div>

			<div className="flex px-10 ">
				<div className="w-[50%]">
					<div className=" bg-[#EFFAF3] border-l-2 border-[#20B55E]">
						<div className="flex items-center gap-2 text-[#18AA54] ml-2 font-semibold">
							{' '}
							<SlArrowDownCircle /> Income{' '}
						</div>
						<div className="px-2">
							{userIcome?.map((data, i) => {
								return (
									<div className="mt-2 bg-white px-2">
										{' '}
										<Card
											title={data.Title}
											catagory={data.Catagory}
											amount={data.Amount}
											date={data.Dat}
											t="text-[#18AA54]"
										/>
										<button
											onClick={() => {
												remove(data, i);
											}}
										>
											<AiTwotoneDelete />
										</button>
									</div>
								);
							})}
						</div>
						<div className="text-center font-semibold text-[#49B471]">
							Total Income: {totalIncome}
						</div>
					</div>
				</div>
				<div className=" w-[50%] ">
					<div className="bg-[#FDF4F4] border-l-2 border-[#C4120F]">
						<div className="font-semibold text-[#C4120F] flex items-center gap-2 ml-2  ">
							{' '}
							<SlArrowUpCircle /> Expense
						</div>
						<div className="px-2">
							{userExpense?.map((data, i) => {
								return (
									<div className=" bg-white px-2 mt-2">
										{' '}
										<Card
											title={data.Title}
											catagory={data.Catagory}
											amount={data.Amount}
											date={data.Dat}
											index={i}
											t="text-[#F7615D]"
										/>
										<button
											onClick={() => {
												remove(data, i);
											}}
										>
											<AiTwotoneDelete />
										</button>
									</div>
								);
							})}
						</div>
						<div className="text-center font-semibold text-[#f64241] ">
							Total Expense {totalExpense}
						</div>
					</div>
				</div>
			</div>
			<div className="text-center font-semibold text-blue-600">
				Remaining-Amount {remainingAmount}
			</div>
		</div>
	);
};

export default Userpage;
