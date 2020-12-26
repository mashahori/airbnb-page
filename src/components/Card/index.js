//import InlineSVG from 'svg-inline-react';
import "./index.scss";

const Card = ({ rate, count, city, descr, price }) => (
  <div className="card__text text">
    <p>
      <span className="text__rate">
        {rate}({count})
      </span>
      <span>{city}</span>
    </p>
    <p>{descr}</p>
    <p>
      От <b className="text__price">{price}</b> за человека
    </p>
  </div>
);

export default Card;
