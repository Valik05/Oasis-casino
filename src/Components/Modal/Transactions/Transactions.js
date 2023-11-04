import React from "react";
import css from './transactions.module.css';
import Sber from './Sber.png';
import './container.css'

const Transactions = ({ showTransactions, toggleTransactions, backToPrevious }) => {
    let classNamesModal = "container";
    if (showTransactions) {
        classNamesModal += " container--active"
    }
    return (
        <div className={classNamesModal}>
            <div className={css.transactionsContainer}>
                <div className={css.transactions}>
                    <div className={css.topForPhone}>
                        <div className={css.exitMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={backToPrevious}>
                                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2BA9F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span onClick={backToPrevious}>Назад</span>
                        </div>
                        <div className={css.transaction}>Перевод</div>
                    </div>
                    <div className={css.transactionsExit}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none" onClick={toggleTransactions}>
                            <path d="M29.5 15.6453C29.5 23.7736 23.0017 30.3512 15 30.3512C6.99828 30.3512 0.5 23.7736 0.5 15.6453C0.5 7.51694 6.99828 0.93932 15 0.93932C23.0017 0.93932 29.5 7.51694 29.5 15.6453Z" stroke="white" />
                            <path d="M10.333 10.9146L14.9997 15.6453M19.6663 20.376L14.9997 15.6453M14.9997 15.6453L19.6663 10.9146L10.333 20.376" stroke="white" strokeWidth="1.33333" />
                        </svg>
                    </div>
                    <div className={css.paymentText}>
                        <img className={css.currentBank} src={Sber}></img>
                        <div className={css.infoTitle}>Платёж в обработке</div>
                        <div className={css.info}>Ваш платёж на 2500 ₽ будет подтверждён автоматически после зачисления</div>
                    </div>
                    <div className={css.paymentInputs}>
                        <div className={css.transactionsSum}>
                            <span>Сумма перевода</span>
                            <input type="text" placeholder="2500 ₽"></input>
                        </div>
                        <div className={css.cardNumber}>
                            <span>Номер карты перевода</span>
                            <input type="text" placeholder="7780 9867 4571 6715"></input>
                        </div>
                        <div className={css.bankName}>
                            <div>
                                <span id={css.bankInfo}>Банк получателя</span>
                                <span id={css.bank}>Сбербанк</span>
                            </div>
                            <img className={css.bankLogo} src={Sber}></img>
                        </div>
                        <div className={css.user}>
                            <span id={css.userInfo}>Имя получателя</span>
                            <span id={css.userName}>Дмитрий Васильевич Н.</span>
                        </div>
                    </div>
                    <div className={css.copyCardNumber}>
                        <div className={css.copyIconRectangle1}></div>
                        <div className={css.copyIconRectangle2}></div>
                        <span>Скопировать номер карты</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Transactions }