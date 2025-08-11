import Card from "./components/card";
import "./App.css";

function App() {
  const productsData = [
    {
      id: 1,
      name: "Medicine",
      description: "High-quality medical supplies for your health needs",
      price: "$99",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Premium health supplement for daily wellness",
      price: "$89",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Essential medical equipment for home care",
      price: "$79",
    },
  ];

  return (
    <div className="app-container">
      <h1>HEALTH SUPPLIES</h1>
      <input type="text" placeholder="Search" className="search-input" />

      <div className="cards-container">
        {productsData.map((product) => (
          <Card
            key={product.id}
            productName={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
