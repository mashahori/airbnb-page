import "./index.scss";

const BestItem = ({ item: { src, title, memories } }) => (
  <li className="item">
    <div className="item__image-wrapper">
      <img className="item__image" src={src} alt={title} />
    </div>
    <h2 className="item__title">{title}</h2>
    <p className="item__memories">{memories} впечатлений</p>
  </li>
);

export default BestItem;
