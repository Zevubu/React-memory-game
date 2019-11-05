import React,{Component} from 'react';
import Display from '../components/Display';
import ScoreBar from '../components/scoreBar';
import Wrapper from "../components/app-body/Wrapper";
import AppBody from '../components/app-body/imgMaker';
import Footer from '../components/footer'; 
import Options from '../Options.json';
// import Images from './images';
  // let imgId = [];
  // let idUsed = []
  

  // ObjectRandomizer = () => {
  //   for(let i = 0; i < Options.length; i++){

  //     let RandomId = Math.floor(Math.random()*Options.length);

  //     if(idUsed.includes(RandomId)){
  //       i--;
  //     }else{
  //       imgId.push(RandomId);
  //     }
  //     console.log(imgId)
  //   }
  // }



class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      Options: Options,
      topScore:0,
      currentScore: 0,
      messageState: "Welcome",
      name: "React.js memory game",
      Artist:"Zev Ubu Hoffman",
      location:"https://www.zevubu.com",
    };
    this.checkForClick = this.checkForClick.bind(this);
  };

  checkForClick(id){
    let clickedOption = this.state.Options.filter(option => option.id === id)[0];
    let OptionsCopy = this.state.Options.slice().sort(function(a,b){return 0.5 - Math.random()});
    // if option has not been clicked set it's click state to true. 
    if(!clickedOption.clicked){
      clickedOption.clicked = true;
      OptionsCopy[OptionsCopy.findIndex((option) => option.id === id)] = clickedOption;
      

      // sets state and incriments counter as well as check if currentScore is greater then topScore
      this.setState({
        Options: OptionsCopy,
        currentScore:this.state.currentScore +1,
        topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore),
        messageState: "You guessed correctly!",
        name: clickedOption.name,
        Artist: clickedOption.Artist,
        location:clickedOption.location
      });
    } 
    else{
      let ResetOptionsCopy = OptionsCopy.map((option) => {
        return{
          id:option.id,
          name: option.name,
          image:option.image,
          Artist: option.Artist,
          location: option.location,
          clicked: false
        }
      });
      this.setState({
        Options:ResetOptionsCopy,
        currentScore: 0,
        messageState: "You guessed incorrectly!"

      });
    }
  }




  render(){
    return(
      <div>
        {/* {this.ObjectRandomizerObjectRandomizer} */}
        <ScoreBar
          CorrectCheck={this.state.messageState}
          Score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <br/>
        <Display />
        <Wrapper>
          {this.state.Options.map(option => (
            <AppBody
              checkForClick = {this.checkForClick}
              id={option.id}
              key={option.id}
              image={option.image}
            />
          ))}
         
        </Wrapper>
         <Footer
          name={this.state.name}
          Artist={this.state.Artist}
          location={this.state.location}
         />  
      </div>
    )
  }
}

export default Home;