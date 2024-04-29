
import { BsDot } from "react-icons/bs";

interface ListItemProps {
    item: string
}
interface ListProps {
    items: string[]
}

function ListItem({item}:ListItemProps) {
  return (
    <li className="flex items-start gap-1 md:text-lg text-base font-normal ">
      <span>
        <BsDot color="black" size={30} />
      </span>
      {item}
    </li>
  );
}

function List({items}:ListProps) {
  return (
    <ul className="flex flex-col gap-2">
    {items.map((item, index) => (
      <ListItem key={index} item={item}/>
    ))}
    </ul>
  );
}

export default List;
