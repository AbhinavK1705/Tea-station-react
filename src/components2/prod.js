export default function Product(props) {
  return (
    <div class="product product-all">
      <img
        src={`./images/product-${props.id}.jpg`}
        alt={`product ${props.id}`}
        class="product-img"
      />
      <h4 class="ratings">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </h4>
      <h4 class="product-title">{props.tea.name}</h4>
      <h4 class="product-price">Rs. {props.tea.price}</h4>
      <button class="btn product-btn">add to cart</button>
      <button class="btn product-btn">buy now</button>
    </div>
  );
}
