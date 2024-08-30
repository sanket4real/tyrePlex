import "./app.scss";
import Navigation from "./components/Navigation";
import Breadcrumb from "./components/Breadcrumb";
import ShopDetails from "./components/ShopDetails";
import Reviews from "./components/Reviews";
import TyresDeal from "./components/TyresDeal";
import Services from "./components/Services";
import DealerTyres from "./components/DealerTyres";
import Payment from "./components/Payment";
import Enquiry from "./components/Enquiry";

function App() {
	return (
		<>
			<Navigation />
			<Breadcrumb />
			<ShopDetails />
			<Reviews reviewCount={2238} />
			<TyresDeal />
			<Services />
			<DealerTyres />
			<Payment />
			<Enquiry />
		</>
	);
}

export default App;
