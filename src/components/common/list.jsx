import React from "react";
import "../../styles/list.css";
import { NavLink } from "react-router-dom";
const List = ({ setIsListHovered, dispatch, setTabSelected }) => {
  return (
    <div
      onMouseOver={() => setIsListHovered(true)}
      onMouseOut={() => setIsListHovered(false)}
      className="list-container"
    >
      <ul>
        <li>
          <NavLink
            onClick={() =>
              dispatch(
                setTabSelected({
                  tabSelected: true,
                })
              )
            }
            className="list-container-navlink"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() =>
              dispatch(
                setTabSelected({
                  tabSelected: true,
                })
              )
            }
            className="list-container-navlink"
            to="/fashion&catwalk"
          >
            Fashion & Catwalk
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() =>
              dispatch(
                setTabSelected({
                  tabSelected: true,
                })
              )
            }
            className="list-container-navlink"
            to="/client-gallery"
          >
            Clients Gallery
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default List;
