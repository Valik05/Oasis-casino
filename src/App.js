import React, { useState } from "react";
import { HeaderComponent } from "./Components/Header/HeaderComponent";
import { FooterComponent } from "./Components/Footer/FooterComponent";
import { MainComponent } from "./Components/Main/MainComponent";
import { Loader } from "./Components/Loader/Loader";
import { Account } from "./Components/Modal/Account/Account";
import { Currency } from "./Components/Modal/Currency/Currency";
import { Bank } from "./Components/Modal/Bank/Bank";
import { Transactions } from "./Components/Modal/Transactions/Transactions";
import { QR } from "./Components/Modal/QR/QR";
import { CardPayment } from "./Components/Modal/CardPayment/CardPayment";
import { BurgerMenu } from "./Components/BurgerMenu/BurgerMenu";
import { AboutUs } from "./Components/AboutUs/AboutUs";

function backToPrevious(lastModal, currentModal) {
  currentModal(false);
  lastModal(true);
  console.log('back');
}

function App() {

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu);

  const [showAboutUs, setShowAboutUs] = useState(false);
  const toggleAboutUs = () => setShowAboutUs(!showAboutUs);

  const [showAccount, setShowAccount] = useState(false);
  const toggleAccount = () => setShowAccount(!showAccount);
  const [showBank, setShowBank] = useState(false);
  const toggleBank = () => {
    setShowBank(!showBank)
    setShowAccount(false)
  };
  const [showCardPayment, setShowCardPayment] = useState(false);
  const toggleCardPayment = () => {
    setShowCardPayment(!showCardPayment)
    setShowBank(false)
  };
  const [showTransactions, setShowTransactions] = useState(false);
  const toggleTransactions = () => {
    setShowTransactions(!showTransactions)
    setShowCardPayment(false)
  };

  const [showCurrency, setShowCurrency] = useState(false);
  const toggleCurrency = () => {
    setShowCurrency(!showCurrency)
    setShowAccount(false)
  };
  const [showQR, setShowQR] = useState(false);
  const toggleQR = () => {
    setShowQR(!showQR)
    setShowCurrency(false)
  };
  let classNamesApp = "App";
  if (showAccount || showBank || showCurrency || showQR || showCardPayment || showTransactions || showBurgerMenu || showAboutUs) {
    classNamesApp += " modal_active"
  }
  return (
    <div className={classNamesApp}>
      <BurgerMenu showBurgerMenu={showBurgerMenu} toggleBurgerMenu={toggleBurgerMenu} toggleAboutUs={toggleAboutUs}/>
      <AboutUs showAboutUs={showAboutUs} toggleAboutUs={toggleAboutUs}/>
      <HeaderComponent toggleAccount={toggleAccount} toggleBurgerMenu={toggleBurgerMenu} />
      <Account showAccount={showAccount} toggleAccount={toggleAccount} toggleBank={toggleBank} toggleCurrency={toggleCurrency} />
      <Currency showCurrency={showCurrency} toggleCurrency={toggleCurrency} toggleQR={toggleQR} backToPrevious={() => backToPrevious(setShowAccount, setShowCurrency)} />
      <Bank showBank={showBank} toggleBank={toggleBank} toggleCardPayment={toggleCardPayment} backToPrevious={() => backToPrevious(setShowAccount, setShowBank)} />
      <Transactions showTransactions={showTransactions} toggleTransactions={toggleTransactions} backToPrevious={() => backToPrevious(setShowCardPayment, setShowTransactions)} />
      <QR showQR={showQR} toggleQR={toggleQR} backToPrevious={() => backToPrevious(setShowCurrency, setShowQR)} />
      <CardPayment showCardPayment={showCardPayment} toggleCardPayment={toggleCardPayment} toggleTransactions={toggleTransactions} backToPrevious={() => backToPrevious(setShowBank, setShowCardPayment)} />
      <MainComponent />
      <FooterComponent />
      {/* <Loader/> */}
    </div>
  );
}

export default App;
