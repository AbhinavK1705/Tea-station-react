
import "./App.css";
import Item from "./components/item";

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
      <Item tea={tea[0]} id={1}/>
      <Item tea={tea[1]} id={2}/>
      <Item tea={tea[2]} id={3}/>
      <Item tea={tea[3]} id={4}/>
      <Item tea={tea[4]} id={5}/>
      <Item tea={tea[5]} id={6}/>
      <Item tea={tea[6]} id={7}/>
      <Item tea={tea[7]} id={8}/>
      <Item tea={tea[8]} id={9}/>
    </>
  );
}

export default App;
