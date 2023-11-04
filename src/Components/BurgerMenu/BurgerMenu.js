import React from "react";
import css from './burgerMenu.module.css';
import './container.css';

const BurgerMenu = ({ showBurgerMenu, toggleBurgerMenu, toggleAboutUs }) => {
    let classNames = "burgerMenuContainer"
    if (showBurgerMenu) {
        classNames += ' active'
    }
    return (
        <div className={classNames}>
            <div className={css.exitMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={toggleBurgerMenu}>
                    <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2BA9F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span onClick={toggleBurgerMenu}>Назад</span>
            </div>
            <nav className={css.menu}>
                <span>Игровой зал</span>
                <span>Турниры</span>
                <span>Зал славы</span>
                <span>Бонусы</span>
            </nav>
            <svg id={css.borderLine} xmlns="http://www.w3.org/2000/svg" width="378" height="2" viewBox="0 0 378 2" fill="none">
                <path d="M0 1H378" stroke="#5F6676" strokeOpacity="0.29" strokeWidth="0.7" />
            </svg>
            <div className={css.info}>
                <span onClick={toggleAboutUs}>О нас</span>
                <span>Новости</span>
                <span>Правила и условия</span>
                <span>Лицензия</span>
                <span>Антиблокировка</span>
            </div>
        </div>
    );
};

export { BurgerMenu }