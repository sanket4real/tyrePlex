import { FcCheckmark } from "react-icons/fc";

const Payment = () => {
	return (
		<section className="mt-4 px-4  max-w-[1440px] mx-auto">
			<h4 className="font-medium">Payment Mode</h4>
			<div className="mt-3 flex gap-8 flex-col sm:flex-row">
				<div className="flex flex-col gap-2">
					<span className="flex items-center gap-2">
						<FcCheckmark /> Deposit to Account
					</span>
					<span className="flex items-center gap-2">
						<FcCheckmark /> Credit Card/Debit Card
					</span>
					<span className="flex items-center gap-2">
						<FcCheckmark /> Wallets (PayTM/PhonePe/Amazon etc.)
					</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="flex items-center gap-2">
						<FcCheckmark /> Net Banking
					</span>
					<span className="flex items-center gap-2">
						<FcCheckmark /> UPI
					</span>
				</div>
			</div>
		</section>
	);
};

export default Payment;
