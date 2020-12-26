import Item from '../../components/Item';
import './index.css';

const List = ({ items }) => {
  return (
    <ul className="list">
      {items && items.map((item) => (
        <Item item={item} key={item.key} />
      ))}
    </ul>
  )
};

export default List;