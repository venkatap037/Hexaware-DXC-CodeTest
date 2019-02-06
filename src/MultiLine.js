import React, { Component } from 'react';
class TagInput extends React.Component {
    constructor(props) {
      super(props);
  
   
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
      this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }
    state = {
        items: [],
        focused: false,
        input: ''
      };
    render() {
      const styles = {
        container: {
          border: '1px solid #ddd',
          padding: '5px',
          borderRadius: '5px',
        },
  
        items: {
          display: 'inline-block',
          padding: '2px',
          border: '1px solid blue',
          fontFamily: 'Helvetica, sans-serif',
          borderRadius: '5px',
          marginRight: '5px',
          cursor: 'pointer'
        },
  
        input: {
          outline: 'none',
          border: 'none',
          fontSize: '14px',
          fontFamily: 'Helvetica, sans-serif'
        }
      };
      return (
        <label>
          <ul style={styles.container}>
            {this.state.items.map((item, i) => 
                                  <div>
              <li key={i} style={styles.items} onClick={this.handleRemoveItem(i)}>
                {item}
                <span>(x)</span>
              </li>
                                  <br/>
                                    </div>
            )}
            <input
              style={styles.input}
              value={this.state.input}
              onChange={this.handleInputChange}
              onKeyDown={this.handleInputKeyDown} />
          </ul>
          {this.state.items.map((item, i) => 
                                  <div>
              <li key={i}>
               {this.props.message + " " + item}
              </li>
                                  <br/>
                                    </div>
            )}
        </label>
      );
    }
  
    handleInputChange(evt) {
      this.setState({ input: evt.target.value });
    }
  
    handleInputKeyDown(evt) {
      if ( evt.keyCode === 13 ) {
        const {value} = evt.target;
        
        this.setState(state => ({
          items: [...state.items, value],
          input: ''
        }));
      }
  
      if ( this.state.items.length && evt.keyCode === 8 && !this.state.input.length ) {
        this.setState(state => ({
          items: state.items.slice(0, state.items.length - 1)
        }));
      }
    }
  
    handleRemoveItem(index) {
      return () => {
        this.setState(state => ({
          items: state.items.filter((item, i) => i !== index)
        }));
      }
    }
  }
  export default TagInput;
