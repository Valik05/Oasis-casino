import React from "react";
import css from './cardPayment.module.css';
import FirstWave from './wave1.png';
import SecondWave from './wave2.png';
import './container.css';

const CardPayment = ({ showCardPayment, toggleCardPayment, toggleTransactions, backToPrevious }) => {
    let classNamesModal = "container";
    if (showCardPayment) {
        classNamesModal += " container--active"
    }
    return (
        <div className={classNamesModal}>
            <div className={css.cardPaymentContainer}>
                <div className={css.cardPayment}>
                    <div className={css.topForPhone}>
                        <div className={css.exitMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={backToPrevious}>
                                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2BA9F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span onClick={backToPrevious}>Назад</span>
                        </div>
                        <div className={css.balance}>Ваш баланс</div>
                    </div>
                    <div className={css.cardPaymentExit}>
                        <div className={css.back} onClick={backToPrevious}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 18 24" fill="none">
                                <path d="M16 18L2 9.5L16 1" stroke="white" strokeWidth="2" />
                            </svg>
                            Назад
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={toggleCardPayment}>
                            <circle cx="15" cy="15" r="14.3333" stroke="white" strokeWidth="1.33333" />
                            <path d="M10.3334 10.3334L15 15M19.6667 19.6667L15 15M15 15L19.6667 10.3334L10.3334 19.6667" stroke="white" strokeWidth="1.33333" />
                        </svg>
                    </div>
                    <div className={css.hint}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <circle cx="12.5005" cy="12.5" r="12" stroke="white" />
                            <path d="M12.0437 19.3618C12.2389 19.5571 12.5555 19.5571 12.7508 19.3618L15.9328 16.1799C16.128 15.9846 16.128 15.668 15.9328 15.4728C15.7375 15.2775 15.4209 15.2775 15.2256 15.4728L12.3972 18.3012L9.56879 15.4728C9.37353 15.2775 9.05694 15.2775 8.86168 15.4728C8.66642 15.668 8.66642 15.9846 8.86168 16.1799L12.0437 19.3618ZM11.8972 5.99176L11.8972 19.0083L12.8972 19.0083L12.8972 5.99176L11.8972 5.99176Z" fill="white" />
                        </svg>
                        <span>Введите сумму для пополнения баланса:</span>
                    </div>
                    <div className={css.moneyAmount}>
                        <div contentEditable="true" className={css.customInput} placeholder="0"></div>
                        <span>₽</span>
                    </div>
                    <div className={css.amountChoice}>
                        <div className={css.amountItem} onClick={toggleTransactions}>500 ₽</div>
                        <div className={css.amountItem} onClick={toggleTransactions}>1000 ₽</div>
                        <div className={css.amountItem} onClick={toggleTransactions}>1500 ₽<div className={css.popularHint}>Чаще выбирают</div></div>
                        <div className={css.amountItem} onClick={toggleTransactions}>2000 ₽<div className={css.popularHintForPhone}>Чаще выбирают</div></div>
                        <div className={css.amountItem} onClick={toggleTransactions}>2500 ₽</div>
                        <div className={css.amountItem} onClick={toggleTransactions}>5000 ₽</div>
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

export { CardPayment }