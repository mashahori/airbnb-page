import { Item, BestItem } from "../../components";
import "./index.scss";

const List = ({ items, type }) => {
  return (
    <ul className={type === "best" ? "list list--best" : "list"}>
      {items &&
        items.map((item) =>
          type === "best" ? (
            <BestItem item={item} key={item.key} />
          ) : (
            <Item item={item} key={item.key} />
          )
        )}
    </ul>
  );
};

export default List;
