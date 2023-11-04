import React from "react";
import css from './qr.module.css';
import QRImage from './QRImage.png';
import './container.css';

const QR = ({ showQR, toggleQR, backToPrevious }) => {
    let classNamesModal = "container";
    if (showQR) {
        classNamesModal += " container--active"
    }
    return (
        <div className={classNamesModal}>
            <div className={css.QRContainer}>
                <div className={css.QR}>
                    <div className={css.topForPhone}>
                        <div className={css.exitMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={backToPrevious}>
                                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#2BA9F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span onClick={backToPrevious}>Назад</span>
                        </div>
                        <div className={css.qrCode}>QR-код</div>
                    </div>
                    <div className={css.QrExit}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none" onClick={toggleQR}>
                            <path d="M29.5 15.6453C29.5 23.7736 23.0017 30.3512 15 30.3512C6.99828 30.3512 0.5 23.7736 0.5 15.6453C0.5 7.51694 6.99828 0.93932 15 0.93932C23.0017 0.93932 29.5 7.51694 29.5 15.6453Z" stroke="white" />
                            <path d="M10.333 10.9146L14.9997 15.6453M19.6663 20.376L14.9997 15.6453M14.9997 15.6453L19.6663 10.9146L10.333 20.376" stroke="white" strokeWidth="1.33333" />
                        </svg>
                    </div>
                    <div className={css.hint}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <circle cx="12.5005" cy="12.5" r="12" fill="#2BA9F2" />
                            <path d="M12.0437 19.3618C12.2389 19.5571 12.5555 19.5571 12.7508 19.3618L15.9328 16.1799C16.128 15.9846 16.128 15.668 15.9328 15.4728C15.7375 15.2775 15.4209 15.2775 15.2256 15.4728L12.3972 18.3012L9.56879 15.4728C9.37353 15.2775 9.05694 15.2775 8.86168 15.4728C8.66642 15.668 8.66642 15.9846 8.86168 16.1799L12.0437 19.3618ZM11.8972 5.99176L11.8972 19.0083L12.8972 19.0083L12.8972 5.99176L11.8972 5.99176Z" fill="white" />
                        </svg>
                        <span>Пополните криптовалютой</span>
                    </div>
                    <div className={css.QRImg}>
                        <img src={QRImage}></img>
                    </div>
                    <div className={css.note}>
                        <div className={css.firstNote}>На этот адрес отправляйте только <span>USDT (Tron)</span></div>
                        <div className={css.secondNote}> Сумма меньше минимальной <span>НЕ</span> будет зачислена и <span>НЕ</span> подлежит возврату!</div>
                    </div>
                    <div className={css.oneTimeUseCode}>
                        <div className={css.info}>Ваш одноразовый код:</div>
                        <div className={css.code}>TjfeiBidfl1RhFKgkKMGmoG89JGDJN</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { QR }