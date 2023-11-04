import React from "react";
import css from './account.module.css';
import './container.css';
import FirstWave from './wave1.png';
import SecondWave from './wave2.png';


const Account = ({ showAccount, toggleAccount, toggleBank, toggleCurrency }) => {
    let classNamesModal = "container";
    if (showAccount) {
        classNamesModal += " container--active"
    }
    return (
        <div className={classNamesModal}>
            <div className={css.accountContainer}>
                <div className={css.account}>
                    <div className={css.topForPhone}>
                        <div className={css.exitMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={toggleAccount}>
                                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2BA9F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span onClick={toggleAccount}>Назад</span>
                        </div>
                        <div className={css.balance}>Ваш баланс</div>
                    </div>
                    <div className={css.accountExit}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={toggleAccount}>
                            <circle cx="15" cy="15" r="14.3333" stroke="white" strokeWidth="1.33333" />
                            <path d="M10.3334 10.3334L15 15M19.6667 19.6667L15 15M15 15L19.6667 10.3334L10.3334 19.6667" stroke="white" strokeWidth="1.33333" />
                        </svg>
                    </div>
                    <div className={css.moneyAmount}>
                        <div>Ваш баланс</div>
                        <div>0.00 ₽
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <circle cx="12.5005" cy="12.5" r="12" stroke="white" />
                                <path d="M12.0437 19.3618C12.2389 19.5571 12.5555 19.5571 12.7508 19.3618L15.9328 16.1799C16.128 15.9846 16.128 15.668 15.9328 15.4728C15.7375 15.2775 15.4209 15.2775 15.2256 15.4728L12.3972 18.3012L9.56879 15.4728C9.37353 15.2775 9.05694 15.2775 8.86168 15.4728C8.66642 15.668 8.66642 15.9846 8.86168 16.1799L12.0437 19.3618ZM11.8972 5.99176L11.8972 19.0083L12.8972 19.0083L12.8972 5.99176L11.8972 5.99176Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className={css.currencyChoice}>
                        <div className={css.dollar} onClick={toggleBank}>
                            <span>$ - United States Dollar</span>
                        </div>
                        <div className={css.ruble} onClick={toggleBank}>
                            <span>₽ - Ruble (RUB)</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
                                <path d="M1 5.5L8.5 13L20.5 1" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                    <div className={css.hint}>Выберите метод оплаты :</div>
                    <div className={css.cryptocurrency} onClick={toggleCurrency}>
                        <span>Криптовалюта
                            <svg width="30" height="25" viewBox="5 4.5 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003" transform="rotate(0)matrix(1, 0, 0, 1, 0, -3)">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4253 6.43215C15.408 6.62196 16.9628 7.2096 17.1351 8.96007C17.2521 10.2362 16.6973 10.9955 15.7799 11.4234C17.261 11.7819 18.162 12.6248 17.9758 14.4945C17.7491 16.8381 15.9412 17.4468 13.3564 17.5752L13.3604 19.9947L11.8381 19.9966L11.8341 17.5771C11.6677 17.5747 11.4937 17.5772 11.3153 17.5796C11.0769 17.5829 10.8306 17.5864 10.5837 17.5787L10.5878 19.9982L9.06823 20.0001L9.06418 17.5806L6.01983 17.5222L6.27638 15.754C6.27638 15.754 7.42618 15.7785 7.40486 15.7657C7.82815 15.7635 7.95378 15.4725 7.98507 15.2814L7.9775 11.4028L7.98945 8.64238C7.94271 8.35464 7.74079 8.0094 7.11848 7.99892C7.15237 7.96945 6.00388 8.00031 6.00388 8.00031L6.00003 6.37926L9.11972 6.37537L9.11576 4.00543L10.6874 4.00347L10.6914 6.37341C10.9948 6.36526 11.2941 6.3676 11.5967 6.36995C11.6961 6.37073 11.7958 6.3715 11.8961 6.37191L11.8921 4.00197L13.4213 4.00006L13.4253 6.43215ZM10.5043 10.8912L10.5815 10.8944C11.5067 10.9335 14.2501 11.0495 14.2543 9.43656C14.2501 7.90522 11.9153 7.95463 10.8305 7.97759C10.7024 7.9803 10.5917 7.98264 10.5043 7.98197V10.8912ZM10.6339 15.642C10.5853 15.6401 10.5406 15.6383 10.5 15.6368L10.5 12.7276C10.5967 12.7285 10.7182 12.727 10.8587 12.7253C12.1408 12.7098 15.0044 12.6752 14.9908 14.219C15.0052 15.8158 11.773 15.6873 10.6339 15.642Z" fill="#ffffff">
                                    </path>
                                </g>
                            </svg>
                        </span>
                        <span>
                            <svg id={css.arrow} xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <path d="M1.35498 1L7.97234 5.5L1.35498 10" stroke="white" strokeWidth="2" />
                            </svg>
                        </span>
                    </div>
                    <div className={css.bottomDesign}>
                        <div className={css.shadowRectangle1}></div>
                        <img className={css.firstWave} src={FirstWave}></img>
                        <div className={css.shadowRectangle2}></div>
                        <img className={css.secondWave} src={SecondWave}></img>
                    </div>
                    <div className={css.websiteTitle}>OASIS</div>
                </div>
            </div>
        </div>
    );
};

export { Account }