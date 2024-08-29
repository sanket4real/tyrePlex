import "./app.scss";
import Navigation from "./components/Navigation";
import Breadcrumb from "./components/Breadcrumb";
import ShopDetails from "./components/ShopDetails";
import Reviews from "./components/Reviews";
import TyresDeal from "./components/TyresDeal";
import Services from "./components/Services";

function App() {
	return (
		<>
			<Navigation />
			<Breadcrumb />
			<ShopDetails />
			<Reviews reviewCount={2238} />
			<TyresDeal />
			<Services />
		</>
	);
}

export default App;
