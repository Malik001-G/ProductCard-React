
const Card = (props) => {
    const { img, name, description, price } = props;
    return (
      <section className="product">
        <img className="product__image" src={img} alt={name} />
        <h2 className="product__title">{name}</h2>
        <p>{description}</p>
        <span className="product__price ">{price}</span>
        <button className="product__btn btn">BUY NOW</button>
      </section>
    );
  };

export default Card;