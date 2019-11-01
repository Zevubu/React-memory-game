import React,{Component} from 'react';
import Header from './components/header';
import AppBody from './components/app-body';
import Footer from './components/footer'; 

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <AppBody />
        <Footer />
      </div>
    )
  }

}


export default App;
