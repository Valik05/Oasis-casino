import React from "react";
import css from './currency.module.css';
import Oasis from './Oasis.png';
import USDT from './USDT.png';
import BTC from './BTC.png';
import DOGE from './DOGE.png';
import SHIB from './SHIB.png';
import BCH from './BCH.png';
import LITE from './LITE.png';
import './container.css'

const Currency = ({ showCurrency, toggleCurrency, toggleQR, backToPrevious }) => {
    let classNamesModal = "container";
    if (showCurrency) {
        classNamesModal += " container--active"
    }
    return (
        <div className={classNamesModal}>
            <div className={css.currencyContainer}>
                <div className={css.currency}>
                    <div className={css.topForPhone}>
                        <div className={css.exitMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={backToPrevious}>
                                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2BA9F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span onClick={backToPrevious}>Назад</span>
                        </div>
                        <div className={css.transaction}>Пополнение</div>
                    </div>
                    <div className={css.currencyExit}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" onClick={backToPrevious}>
                            <path d="M16 18.7551L2 10.1384L16 1.52169" stroke="white" strokeWidth="2" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none" onClick={toggleCurrency}>
                            <path d="M29.5 15.6453C29.5 23.7736 23.0017 30.3512 15 30.3512C6.99828 30.3512 0.5 23.7736 0.5 15.6453C0.5 7.51694 6.99828 0.93932 15 0.93932C23.0017 0.93932 29.5 7.51694 29.5 15.6453Z" stroke="white" />
                            <path d="M10.333 10.9146L14.9997 15.6453M19.6663 20.376L14.9997 15.6453M14.9997 15.6453L19.6663 10.9146L10.333 20.376" stroke="white" strokeWidth="1.33333" />
                        </svg>
                    </div>
                    <div className={css.hint}>Выберите валюту для пополнения</div>
                    <div className={css.currencyChoice}>
                        <div className={css.currencyItem} onClick={toggleQR}>
                            <img src={Oasis}></img>OASIS <span>(OSS)</span>
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.currencyItem} onClick={toggleQR}>
                            <img src={USDT}></img>USDT <span>(ERC 20)</span>
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.currencyItem} onClick={toggleQR}>
                            <img src={BTC}></img>BTC <span>(Bitcoin)</span>
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.currencyItem} onClick={toggleQR}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" preserveAspectRatio="xMidYMid" viewBox="0 0 270 450">
                                <path fill="#343434" d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" />
                                <path fill="#8C8C8C" d="M127.962 287.959V0L0 212.32z" />
                                <path fill="#3C3C3B" d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" />
                                <path fill="#8C8C8C" d="M0 236.585l127.962 180.32v-104.72z" /><path fill="#141414" d="M127.961 154.159v133.799l127.96-75.637z" />
                                <path fill="#393939" d="M127.96 154.159L0 212.32l127.96 75.637z" />
                            </svg>ETH <span>(Ethereum)</span>
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.currencyItem} onClick={toggleQR}>
                            <img src={DOGE}></img>DOGE <span>(Dogecoin)</span>
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.currencyItem} onClick={toggleQR}>
                            <img src={SHIB}></img>SHIB <span>(Ethereum)</span>
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.currencyItem} onClick={toggleQR}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 79 80" fill="none">
                                <path d="M2 2L41.1667 77M2 2L63.6667 11.8901M2 2L41.1667 37.4396M41.1667 77L77 18.4835M41.1667 77V37.4396M77 18.4835L63.6667 11.8901M77 18.4835L41.1667 37.4396M63.6667 11.8901L41.1667 37.4396" stroke="#C6283B" strokeWidth="2" />
                            </svg>TRX <span>(Tron)</span>
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.currencyItem} onClick={toggleQR}>
                            <img src={BCH}></img>BCH <span>(Bitcoin)</span>
                            <div className={css.borderBottom}></div>
                        </div>
                        <div className={css.currencyItem} onClick={toggleQR}>
                            <img src={LITE}></img>LITE <span>(Litecoin)</span>
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

export { Currency }