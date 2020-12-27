import { List } from "../../components";
import "./index.scss";

const Header = ({ items }) => (
  <section>
    <h1 className="title">Сиэтл: лучшее</h1>
    <List items={items} type="best" />
  </section>
);

export default Header;
