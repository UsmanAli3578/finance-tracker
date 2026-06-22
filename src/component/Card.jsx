import React from 'react';
import { FaGasPump } from 'react-icons/fa';
const Card = ({ title, catagory, amount, date, t }) => {
	return (
		<div className="">
			<div className="flex justify-between">
				<div className="flex items-center gap-2 font-semibold">
					{' '}
					{title}
				</div>
				<div className={t}> {amount}</div>
			</div>

			<div className={t}> {catagory}</div>
			<div className="text-sm font-semibold text-[#9B9DA3]"> {date}</div>
		</div>
	);
};

export default Card;
