import "./item.css";
function Item(props) {
  console.log(`src/components/images/product-${props.id}.png`);
  return (
    <>
      <div className="product product-all">
        <img
          src={`src/components/images/product-${props.id}.png`}
          alt="product 1"
          className="product-img"
        />

        <h4 className="ratings">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </h4>
        <h4 className="product-title">{props.tea.name}</h4>
        <h4 className="product-price">{props.tea.price}</h4>
        <button className="btn product-btn">add to cart</button>
        <button className="btn product-btn">buy now</button>
      </div>
    </>
  );
}

export default Item;
