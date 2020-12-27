import { List } from "../../components";

import "./index.scss";

const Experiences = ({ items }) => (
  <section>
    <h1 className="title">All experiences</h1>
    <List items={items} type="experiences" />
  </section>
);

export default Experiences;
