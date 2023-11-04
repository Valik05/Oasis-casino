import React from "react";
import css from './aboutUs.module.css';
import './container.css';

const AboutUs = ({ showAboutUs, toggleAboutUs }) => {
    let classNames = "aboutUsContainer"
    if (showAboutUs) {
        classNames += ' active'
    }
    return (
        <div className={classNames}>
            <div className={css.top}>
                <div className={css.exitMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={toggleAboutUs}>
                        <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2BA9F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span onClick={toggleAboutUs}>Назад</span>
                </div>
                <div className={css.aboutUs}>О нас</div>
            </div>
            <div className={css.info}>
                <div className={css.firstParagraph}>
                    damn 123 — это популярная площадка с автоматами лучших провайдеров.
                    Заведение обеспечивает честное проведение игровых сессий,
                    безопасность финансовых операций и своевременность выплаты выигрышей.
                    Для внесения депозита предлагаются около десяти надежных способов.
                    Деньги мгновенно поступают на счет. Ставить их на раунды можно круглосуточно.
                    Средний уровень теоретической отдачи по залу составляет 496%
                    В некоторых версиях азартных игр этот показатель достигает 995%.
                </div>
                <div className={css.secondParagraph}>
                    Для зарегистрированных пользователей в казино проводятся турниры с большим призовым фондом и лотереи с ценными призами.
                    С официального сайта можно скачать приложение для компьютера или мобильного устройства.
                    После установки программы для посещения зала пользоваться браузером не понадобится.
                    Вход будет открываться с рабочего стола ПК и дисплея телефона.
                </div>
            </div>
        </div>
    );
};

export { AboutUs }