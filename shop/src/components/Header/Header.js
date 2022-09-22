import React from "react";
import style from "./Header.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const Header = ({favCounter, binCounter}) => {
    return (
        <div className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.headerName}>
                    <img
                        src="./img/tree.png"
                        alt=""
                        className={style.headerNameImg}
                    />
                    <h3 className={style.headerNameText}>VineShop</h3>
                </div>
                <nav className={style.headerNav}>
                    <p className={style.headerNavItem}><NavLink className={style.headerNavItem} to='' end>Home</NavLink></p>
                    <p className={style.headerNavItem}><NavLink  className={style.headerNavItem} to='/bin'>Bin</NavLink></p>
                    <p className={style.headerNavItem}><NavLink className={style.headerNavItem} to='/favorites'>Favorites</NavLink></p>
                    <div className={style.headerNavFav}>
                        <img
                            src="./img/favoritesymbol.svg"
                            alt=""
                            className={style.headerNavFavImg}
                        />

                        <div className={style.headerNavFavAmount}>{favCounter === 0 ? null :
                            <div>{favCounter}</div>}</div>
                        <div className={style.headerNavFavText}>
                            Fav.
                        </div>
                    </div>
                    <div className={style.headerNavBin}>
                        <img
                            src="./img/basket.svg"
                            alt=""
                            className={style.headerNavBinImg}
                        />
                        <div className={style.headerNavBinAmount}>  {binCounter === 0 ? null :
                            <div>{binCounter}</div>}</div>
                        <div className={style.headerNavBinText}>
                            Bin.
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    );
};

Header.propTypes = {
    favCounter: PropTypes.number,
    binCounter: PropTypes.number
};
Header.defaulyProps = {
    favCounter: 0,
    binCounter: 0
};
export default Header;
