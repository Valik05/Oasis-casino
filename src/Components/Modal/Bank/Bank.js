import React from "react";
import css from './bank.module.css';
import Sber from './Sber.png';
import VTB from './VTB.png';
import Alpha from './Alpha.png';
import Tinkoff from './Tinkoff.png';
import MTC from './MTC.png';
import Qiwi from './Qiwi.png';
import './container.css'

const Bank = ({ showBank, toggleBank, toggleCardPayment, backToPrevious }) => {
    let classNamesModal = "container";
    if (showBank) {
        classNamesModal += " container--active"
    }
    return (
        <div className={classNamesModal}>
            <div className={css.bankContainer}>
                <div className={css.bank}>
                    <div className={css.topForPhone}>
                        <div className={css.exitMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={backToPrevious}>
                                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2BA9F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span onClick={backToPrevious}>Назад</span>
                        </div>
                        <div className={css.transaction}>Перевод</div>
                    </div>
                    <div className={css.bankExit} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" onClick={backToPrevious}>
                            <path d="M16 18.7551L2 10.1384L16 1.52169" stroke="white" strokeWidth="2" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none" onClick={toggleBank}>
                            <path d="M29.5 15.6453C29.5 23.7736 23.0017 30.3512 15 30.3512C6.99828 30.3512 0.5 23.7736 0.5 15.6453C0.5 7.51694 6.99828 0.93932 15 0.93932C23.0017 0.93932 29.5 7.51694 29.5 15.6453Z" stroke="white" />
                            <path d="M10.333 10.9146L14.9997 15.6453M19.6663 20.376L14.9997 15.6453M14.9997 15.6453L19.6663 10.9146L10.333 20.376" stroke="white" strokeWidth="1.33333" />
                        </svg>
                    </div>
                    <div className={css.hint}>ВЫБЕРИТЕ БАНК ДЛЯ ПЕРЕВОДА</div>
                    <div className={css.bankChoice}>
                        <div className={css.bankItem} onClick={toggleCardPayment}>
                            <img src={Sber} className={css.normalImg}></img>Сбербанк
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.bankItem} onClick={toggleCardPayment}>
                            <img src={VTB} id={css.vtb}></img>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 75 75" fill="none">
                                <circle opacity="0.75" cx="37.5" cy="37.5" r="37.5" fill="#062C77" />
                            </svg>ВТБ Банк
                            <div className={css.borderBottomVTB}></div>
                        </div>
                        <div className={css.bankItem} onClick={toggleCardPayment}>
                            <img src={Alpha} className={css.normalImg}></img>Альфа - Банк
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.bankItem} onClick={toggleCardPayment}>
                            <img src={Tinkoff} id={css.tinkoff}></img>
                            <div className={css.tinkoffText}>Tinkoff</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 75 75" fill="none">
                                <circle cx="37.5" cy="37.5" r="37.5" fill="black" />
                            </svg>Тинькофф Банк
                            <div className={css.borderBottomTinkoff}></div>
                        </div>
                        <div className={css.bankItem} onClick={toggleCardPayment}>
                            <img src={MTC} className={css.normalImg}></img>МТС Банк
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.bankItem} onClick={toggleCardPayment}>
                            <img src={Qiwi} className={css.normalImg}></img>QIWI Кошелёк
                            <div className={css.borderBottom}></div>
                        </div>
                    </div>
                    <div className={css.bottomBtnContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 25 25" fill="none">
                            <circle cx="12.5005" cy="12.5" r="12" stroke="white" strokeOpacity="0.5" />
                            <path d="M12.0437 19.3618C12.2389 19.5571 12.5555 19.5571 12.7508 19.3618L15.9328 16.1799C16.128 15.9846 16.128 15.668 15.9328 15.4728C15.7375 15.2775 15.4209 15.2775 15.2256 15.4728L12.3972 18.3012L9.56879 15.4728C9.37353 15.2775 9.05694 15.2775 8.86168 15.4728C8.66642 15.668 8.66642 15.9846 8.86168 16.1799L12.0437 19.3618ZM11.8972 5.99176L11.8972 19.0083L12.8972 19.0083L12.8972 5.99176L11.8972 5.99176Z" fill="white" fillOpacity="0.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Bank }
