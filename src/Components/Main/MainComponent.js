import React from "react";
import css from './main.module.css';


const MainComponent = () => {
    return (
        <main>
            <div className={css.top}>
                <div className={css.slider}>
                    <div className={css.sliderContent}>
                        <div className={css.sliderImg}></div>
                        <div className={css.currentSliderImg}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="31" viewBox="0 0 18 31" fill="none">
                                    <path opacity="0.8" d="M16 2L3 15.5L16 29" stroke="black" strokeWidth="4" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="94" height="10" viewBox="0 0 94 10" fill="none">
                                    <circle opacity="0.6" cx="5" cy="5" r="5" fill="black" />
                                    <circle opacity="0.6" cx="26" cy="5" r="5" fill="black" />
                                    <circle opacity="0.6" cx="47" cy="5" r="5" fill="black" />
                                    <circle cx="68" cy="5" r="5" fill="#2BA9F2" />
                                    <circle opacity="0.6" cx="89" cy="5" r="5" fill="black" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="31" viewBox="0 0 18 31" fill="none">
                                    <path opacity="0.8" d="M2 2L15 15.5L2 29" stroke="black" strokeWidth="4" />
                                </svg>
                            </span>
                        </div>
                        <div className={css.sliderImg}></div>
                    </div>
                    <svg id={css.sliderCirclesForPhone} xmlns="http://www.w3.org/2000/svg" width="39" height="6" viewBox="0 0 39 6" fill="none">
                        <circle opacity="0.6" cx="2.60527" cy="2.60527" r="2.60527" fill="#3A3D43" />
                        <circle opacity="0.6" cx="10.8158" cy="2.60527" r="2.60527" fill="#3A3D43" />
                        <circle opacity="0.6" cx="19.0263" cy="2.60527" r="2.60527" fill="#3A3D43" />
                        <circle cx="27.2368" cy="2.60527" r="2.60527" fill="#2BA9F2" />
                        <circle opacity="0.6" cx="35.4473" cy="2.60527" r="2.60527" fill="#3A3D43" />
                    </svg>
                </div>
                <div className={css.searchBar}>
                    <div className={css.searchBarBg}>
                        <div className={css.allGamesBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="27" viewBox="0 0 22 27" fill="none">
                                <path d="M11.0324 0C7.86482 0.00237177 5.26579 2.57996 5.26579 5.81018C5.26579 7.15682 5.73964 8.42836 6.48926 9.41726C6.25058 9.38669 6.01734 9.34307 5.77053 9.34307C2.60123 9.34307 0 11.9955 0 15.2273C0 18.4588 2.60123 21.1114 5.77053 21.1114C7.06274 21.1114 8.25468 20.67 9.21506 19.9295L6.31985 27H15.6723L12.7325 19.8228C13.7151 20.6249 14.9553 21.1117 16.2982 21.1117C19.4675 21.1117 22 18.4592 22 15.2276C22 11.9959 19.4673 9.34347 16.2981 9.34347C16.0267 9.34347 15.7678 9.37983 15.5065 9.41752C16.2672 8.42467 16.7341 7.16802 16.7341 5.81045C16.7341 2.58022 14.2035 0.00263609 11.0362 0.000396084H11.0323L11.0324 0Z" fill="#F8F8F8" />
                            </svg>
                            Все игры
                        </div>
                        
                        <div className={css.searchField}>
                            <svg className={css.searchIconForPhone} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M8.68924 15.3193C12.5745 15.3193 15.7242 12.2509 15.7242 8.4658C15.7242 4.68072 12.5745 1.6123 8.68924 1.6123C4.80395 1.6123 1.6543 4.68072 1.6543 8.4658C1.6543 12.2509 4.80395 15.3193 8.68924 15.3193Z" stroke="white" strokeWidth="1.47722" strokeLinejoin="round" />
                            <path d="M13.7472 13.394L17.2586 16.8148" stroke="white" strokeWidth="1.47722" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            <input type="text" placeholder="Введите название игры"></input>
                        </div>
                        <div className={css.filterBtn}>
                            <span>Провайдер:</span>
                            <span>Все</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.gamesContainer}>
                <div className={css.games}>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                    <div className={css.game}></div>
                </div>
            </div>
            <div className={css.moreGamesContainer}>
                <div className={css.moreGames}>
                    <span>Ещё игры</span>
                    <div className={css.arrowInCircleSvg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="64" viewBox="0 0 16 64" fill="none">
                            <path d="M7.29289 63.7071C7.68341 64.0976 8.31658 64.0976 8.7071 63.7071L15.0711 57.3431C15.4616 56.9526 15.4616 56.3195 15.0711 55.9289C14.6805 55.5384 14.0474 55.5384 13.6569 55.9289L8 61.5858L2.34314 55.9289C1.95262 55.5384 1.31945 55.5384 0.92893 55.9289C0.538405 56.3195 0.538405 56.9526 0.92893 57.3431L7.29289 63.7071ZM7 -4.37114e-08L7 63L9 63L9 4.37114e-08L7 -4.37114e-08Z" fill="white" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="121" height="121" viewBox="0 0 121 121" fill="none">
                            <circle cx="60.5" cy="60.5" r="59.5" stroke="white" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    );
};

export { MainComponent }