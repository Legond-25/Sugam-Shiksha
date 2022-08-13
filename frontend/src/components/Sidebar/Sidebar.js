const Sidebar = (props) => {
  return (
    <ul className="sidebar">
      {Object.entries(props.icons).map((icon) => {
        console.log(icon);
        return (
          <li className="sidebar__item">
            <i className={`sidebar__icon ${icon[1]}`}></i>
            <a className="sidebar__link" href={icon[0]}>
              {icon[0]}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
