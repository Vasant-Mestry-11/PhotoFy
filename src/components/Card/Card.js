const Card = ({ id, urls, description, alt_description }) => {
  const { small } = urls;
  return (
    <section className={`card`}>
      <div className="card__image">
        <img src={small} alt={alt_description} />
      </div>
      <p className="card__description">{description}</p>
    </section>
  );
};

export default Card;
