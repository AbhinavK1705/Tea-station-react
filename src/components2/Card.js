import Product from "./prod";
let tea = [
  {
    name: "Ginger peach tea",
    price: 399,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  { name: "Fruit sangria", price: 349, reviews: 21, ratings: 4, quantity: 0 },
  { name: "Clear tea", price: 499, reviews: 21, ratings: 5, quantity: 0 },
  {
    name: "Moonlight Serenade Oolong",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  {
    name: "Dragon's Breath",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  {
    name: "Sunset Blossom Rooibos",
    price: 449,
    reviews: 21,
    ratings: 2,
    quantity: 0,
  },
  {
    name: "Verdant Orchard Elixir",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  {
    name: "Lemon Frost Oasis",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  {
    name: "dooars terai",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
];
export default function Card(props) {
  return (
    <>
      <section class="products">
        <div class="section-center clearfix">
          <article
            class="products-inventory-all clearfix"
            id="products-inventory-all"
          >
            <Product tea={tea[0]} id={1} />
            <Product tea={tea[1]} id={2} />
            <Product tea={tea[2]} id={3} />
            <Product tea={tea[3]} id={4} />
            <Product tea={tea[4]} id={5} />
            <Product tea={tea[5]} id={6} />
            <Product tea={tea[6]} id={7} />
            <Product tea={tea[7]} id={8} />
            <Product tea={tea[8]} id={9} />
          </article>
        </div>
      </section>
    </>
  );
}
