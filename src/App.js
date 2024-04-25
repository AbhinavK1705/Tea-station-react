import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Card from "./components2/Card";

let tea = [
  { name: "Ginger peach tea", price: 399, reviews: 21, ratings: 5 },
  { name: "Fruit sangria", price: 349, reviews: 21, ratings: 5 },
  { name: "Clear tea", price: 499, reviews: 21, ratings: 5 },
  { name: "Moonlight Serenade Oolong", price: 449, reviews: 21, ratings: 5 },
  { name: "Dragon's Breath Pu-erh", price: 449, reviews: 21, ratings: 5 },
  { name: "Sunset Blossom Rooibos", price: 449, reviews: 21, ratings: 5 },
  { name: "Verdant Orchard Elixir", price: 449, reviews: 21, ratings: 5 },
  { name: "Lemon Frost Oasis", price: 449, reviews: 21, ratings: 5 },
  { name: "Ginger peach tea", price: 449, reviews: 21, ratings: 5 },
];

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
