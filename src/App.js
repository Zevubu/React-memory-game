import React,{Component} from 'react';
import Header from './components/header';
import ScoreBar from './components/scoreBar';
import Wrapper from "./components/app-body/Wrapper";
import AppBody from './components/app-body/imgMaker';
import Footer from './components/footer'; 
import Options from './Options.json'

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <ScoreBar />
        <Wrapper>
            <AppBody
              image={Options[0].image}
            />
            <AppBody
              image={Options[1].image}             
            />
            <AppBody
              image={Options[2].image}              
            />
            <AppBody
              image={Options[2].image}
            />
        </Wrapper>
        <Wrapper>
            <AppBody
              image={Options[0].image}
            />
            <AppBody
              image={Options[1].image}
            />
            <AppBody
              image={Options[2].image}
            />
            <AppBody
              image={Options[2].image}
            />
        </Wrapper>
        <Wrapper>
            <AppBody
              image={Options[0].image}
            />
            <AppBody
              image={Options[1].image}
            />
            <AppBody
              image={Options[2].image}
            />
            <AppBody
              image={Options[2].image}
            />
        </Wrapper>
        <Footer />
      </div>
    )
  }

}


export default App;
