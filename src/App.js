import React, { Component } from 'react';

class App extends Component {
  state = {
    doodles: []
  }

  handleClick = (id) => {
    var modal = document.getElementById('myModal')
    var img = document.getElementById(id)

    img.addEventListener('click',function(){
      var modalImg = document.getElementById("doodle")
      modal.style.display = "block"
      modalImg.src = this.src
    });
    var span = document.getElementsByClassName("close")[0]
    span.onclick = function() { 
      modal.style.display = "none"
    }	
}

  componentWillMount(){
    let doodles = []

    for(let i = 1; i <= 11; i++){
        doodles[i] = `./assets/doodles/${i}.jpg`
    }
    this.setState({doodles})  
  }

  render() {
    const { doodles } = this.state
    return (
      <div className="App">
      <h1>Delic Doodles</h1> <br/>
        <div className="container">
          <div className="row"> 
            {doodles.map((doodle, index) => (   
              <div key={index} className="col-md-3 col-sm-12">
                <div className="thumbnail">
                  <img onClick={() => this.handleClick(index)} className="doodle-img" id={index} src={require(`${doodle}`)} alt=""/>
                </div>
              </div>       
            ))}
          </div>
        </div>
        <div id="myModal" className="modal">
            <span className="close"><i className="fa fa-times"></i></span>
            <img alt="modal" className="modal-content" id="doodle" />
            <div id="caption"></div>
        </div>
      </div>
    );
  }
}

export default App;
