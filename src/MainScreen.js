import React, {Component} from "react";

class  MainScreen extends Component {

  makeGameList() {
    return (
        null
    )
  }

  clickOnGameItem(){}

  render() {
    return (
        <div className="MainScreen" style={{marginBottom: "20px", marginTop: "10px"}}>
          <hr/>
          <div className="col-md-12" style={{textAlign: "center"}}>
            <h3>List of Games:</h3>
            {this.makeGameList()}
          </div>
          <hr/>
          <div>
            <h3>Start a new game</h3>
          </div>
        </div>
    );
  }
}

export default MainScreen;