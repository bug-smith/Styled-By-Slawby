import { MenuItem } from "./MenuItem";

export function AppDrawer({ isOpen, onClose, onMenuItemClick, items }) {
  return (
    <div>
      <div className="">
        <ul className="">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              menuItem={item.title}
              onClick={() => onMenuItemClick(item.title)}
            />
          ))}
        </ul>
      </div>
      {isOpen && <div className="" onClick={onClose}></div>}
    </div>
  );
}
