import React from 'react';
import { FlowerSpinner } from'react-epic-spinners'
import ProgressiveImage from 'react-progressive-image'

const handleClick = (id) => {
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

const placeholder = (
  <FlowerSpinner color="#fc58fc" className="spinner"/>
)

const App = () => {    
  const [doodles, setDoodles] = React.useState([])  
  React.useEffect(() => {
    let doodles = []
    for(let i = 1; i <= 11; i++){
        doodles[i] = `./assets/doodles/${i}.jpg`
    }
    setDoodles(doodles) 
  })

  return (
    <div className="App">
    <h1>Delic Doodles</h1> <br/>
      <div className="container">
        <div className="row"> 
          {doodles.map((doodle, index) => (   
            <div key={index} className="col-md-3 col-sm-12">
              <div className="thumbnail">
                <ProgressiveImage src={require(`${doodle}`)} placeholder="">
                  {(src, loading) => (loading ? placeholder : 
                  <img onClick={() => handleClick(index)} className="doodle-img" id={index} src={src} alt=""/>)}
                </ProgressiveImage>
              </div>
            </div>       
          ))}
        </div>
      </div>
      <div className="footer" style={{textAlign: 'center', fontSize: 21}}>
        Art by <a style={{fontSize: 21}} href="https://dribbble.com/Mr_Chao">Chirag Adiga</a> 
      </div><br/>
      <div id="myModal" className="modal">
          <span className="close"><i className="fa fa-times"></i></span>
          <img alt="modal" className="modal-content" id="doodle" />
          <div id="caption"></div>
      </div>
    </div>
  );
}

export default App;
