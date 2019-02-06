import React, { Component } from 'react';
import { injectIntl, defineMessages } from "react-intl";
import arLocaleData from "react-intl/locale-data/ar";
import esLocaleData from "react-intl/locale-data/es";
import TagInput from "./MultiLine";

import logo from './logo.svg';
import './App.css';

const messages = defineMessages({
  title: {
    id: 'app.title',
    defaultMessage: 'Welcome'
  },
  content1: {
    id: 'app.content1',
    defaultMessage: 'To get started, edit'
  },
  content2: {
    id: 'app.content2',
    defaultMessage: 'and save to reload.'
  },
})

class App extends React.Component  {
  
  handleChange(pro,event){
    pro.clicked(event.target.value);
    
  }
  render() {
    const { intl: { formatMessage,locale } } = this.props;
    return (
        <div className="App" style={{direction: locale ==="ar"? "rtl": "ltr"}}>
          <header className="App-header">
            <select 
        onChange={this.handleChange.bind(this,this.props)} 
      >
       <option value="ar">العربية</option>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      <TagInput message={formatMessage(messages.title)}/>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">{formatMessage(messages.title)}</h1>
          </header>
  
        </div>
    );
  }
}

export default injectIntl(App);
