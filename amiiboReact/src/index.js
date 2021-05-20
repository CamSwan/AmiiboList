import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { getAmiibo, getDetail } from './function';
import logo from './logo.svg';
import nintendo from './nintendo.svg';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: "null",
    }
  }
  handleClick(){
    
    getAmiibo();
  }

  onClick(){
    getDetail();
  }
  

  render(){
    return (
      <body>
        {/* Header */}
        <div className="row">
          <div className="column">
            <p>
              <img src={logo} alt="Amiibo" className="logo"/>
            </p>
          </div>
          <div className="column">
            <p>
              <button className="button" onClick={this.handleClick}><h1>Open List</h1></button>
            </p>
          </div>
          <div className="column">
            <p>
              <div className="loader" id="loader" for="loader1"></div>
              <select className="select" id="amiibo" for="list">
                
              </select>
              <button className="button" id="detail" onClick={this.onClick}><h3>Details</h3></button>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="row">
          <div className="column">
            <div className="card">
              <p><div className="loader" id="loader1"></div></p>
              <p id="info1"></p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <p><div class="loader" id="loader2" style={{visibility: "hidden"}}></div></p>
              <p id="info2"></p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <p><div class="loader" id="loader3"></div></p>
              <p id="info3"></p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="row">
            <div className="column">
              <a href="https://www.nintendo.com/">
                <img src={nintendo} alt="Nintendo Logo" className="nintendo"/>
              </a>
            </div>
            <div class="column">
     
            </div>
            <div class="column">
              <p>
                <a href="https://amiiboapi.com/docs/" target="_blank" style={{color: "white"}} rel="noopener noreferrer"> Amiibo API Documentation </a>
              </p>
            </div>
          </div> 
        </div> 
      </body>
    );//end return
  }//end render
}//end class

ReactDOM.render(<App />, document.getElementById('root'));
