import question from "../assets/tyres/pngwing.com.png";

const Enquiry = () => {
	return (
		<section className="mt-8 px-4  max-w-[1440px] mx-auto">
			<div className="relative max-w-[1028px] mx-auto p-8 border border-slate-500 bg-blue-100 rounded-xl pr-32">
				<h4 className="font-medium">Have a question about Tyres?</h4>
				<span className="">Get an answer in 24 hours from our experts.</span>
				<div className="relative mt-6 flex gap-3">
					<input
						type="text"
						className="w-full border border-black rounded-xl py-1 px-3 placeholder:text-slate-600 max-w-96"
						placeholder="type question here"
						id="askQuestion"
						name="askQuestion"
					/>
					<label htmlFor="askQuestion" className="sr-only">
						Ask Question
					</label>
					<button className="border border-black rounded-xl py-1 px-3 bg-blue-300">
						Ask
					</button>
				</div>
				<div className="absolute max-w-32 right-2 top-4">
					<img src={question} alt="question img" />
				</div>
			</div>
		</section>
	);
};

export default Enquiry;
