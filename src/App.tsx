import React,{Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import {setName,deleteName} from "./modules/actions/actions";

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// オブジェクトの型定義としてインターフェースを利用
interface Props {
  name:string;
}

interface State {
  name:string
}


class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name:this.props.name,
    }
  }

  render() {

    return (
        <>
        <h1>Your name is {this.state.name}</h1>
        </>
    )
  }
}


const mapStateToProps = state => ({
  // storeは巨大なJsonの塊なので、nameにjsonから取って来たデータを代入している。
  name: state.user.name
});

const mapDispatchToProps = {
  // importしたactionCreatorを記述。
  setName,
  deleteName
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

