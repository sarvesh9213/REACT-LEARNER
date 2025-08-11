import Card from "./components/card";
function App() {
  const productsname = [
    {
      name: "medicine",
      description: "This is a medicine",
      price: "$99",
    },
    {
      name: "Product 2",
      description: "Description for product 2",
      price: "$89",
    },
    {
      name: "Product 3",
      description: "Description for product 3",
      price: "$79",
    },
  ];
  return (
    <div className="app-container">
      <h1> HEALTH SUPPLIES </h1>
      <input type="text" placeholder="Search" className="input" />

      <div className="cards-container">
        <center>
          <Card productsname={productsname}></Card>
          <Card productsname={productsname}></Card>
          <Card productsname={productsname}></Card>
        </center>
      </div>
    </div>
  );
}

export default App;
