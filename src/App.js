import React, { Component } from 'react';

class App extends Component {
  state = {
    doodles: []
  }

  componentWillMount(){
    let doodles = []

    for(let i = 1; i <= 19; i++){
        doodles[i] = `./assets/doodles/${i}.jpg`
    }
    this.setState({doodles})
  }

  render() {
    const { doodles } = this.state
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            {doodles.map(doodle => (
              <div className="col-md-6 col-sm-12">   
                <div className="thumbnail">           
                  <img key={doodle} src={require(`${doodle}`)} alt=""/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
