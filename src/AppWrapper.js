import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from "react-intl";
import arLocaleData from "react-intl/locale-data/ar";
import esLocaleData from "react-intl/locale-data/es";
import translations from "./i18n/locales"
import App from "./App";

addLocaleData(arLocaleData);
addLocaleData(esLocaleData);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      locale:"ar"
    }
    this.callforlocale = this.callforlocale.bind(this);

  }

  callforlocale(data){
console.log('callforlocale',data);
const locale = data;

this.setState({locale:locale});
console.log("stateloc",this.state.locale);

  }
  render() {
    // get locale from url
    const messages = translations[this.state.locale];
    return (
      <IntlProvider locale={this.state.locale} key={this.state.locale} messages={messages}>
        <App clicked={this.callforlocale}/>
      </IntlProvider>
    );
  }
}

export default AppWrapper;
