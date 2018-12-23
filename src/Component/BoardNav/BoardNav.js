import React, { Component } from "react";
import BoardTitleMenu from './BoardTitleMenu.js';
import MainMenu from "../MainMenu.js";
import Team from "../Team.js";

class BoardNav extends Component {
  state = {
    BoardName: "Add Board Name",
    showNameMenu: false,
    inviteMember: false,

    MMisOpen: false,
    starColor: 'white',

    team: [{ name: 'Natalie Roode', initials: 'NR', score: 0 }, { name: 'Minnie Mouse', initials: 'MM', score: 2 }, { name: 'Minnie Mouse', initials: 'MM', score: 2 }]
  };

  // -- handle main menu --

  toggleCloseButton = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      MMisOpen: !prevState.MMisOpen
    }))
  }

  // -- update name menu --
  handleShowMenu = () => {
    const { showNameMenu } = this.state;
    this.setState({
      showNameMenu: !showNameMenu
    });
  };

// -- update member invite menu ---
  handleInviteMember = () => {
    const { inviteMember } = this.state;
    this.setState({
      inviteMember: !inviteMember
    });
  };


  handleNameSubmit = e => {
    e.preventDefault();
    const newName = e.target.elements.name.value
    const inputLength = newName.length;
    if (inputLength === 0) {
      alert('please enter a name')
    } else if (inputLength !== 0) {
      this.setState({
        BoardName: newName,
        showNameMenu: false,
      });
    }
  }

  toggleYellow = () => {
    this.setState((prevState) => ({
      starColor: (prevState.starColor === '#f2d600' ? 'white' : '#f2d600')
    }));
  };

  //split name into array
  // const abbr = this.state.team[0].name.split(' ');
  // console.log(abbr)
  //take the first letter of each item in the array

  render() {
    const { showNameMenu, BoardName, inviteMember } = this.state;
    return (
      <div className="board-nav-wrapper">
        <MainMenu
          menuState={false}
          MMisOpen={this.state.MMisOpen}
          toggleCloseButton={this.toggleCloseButton}
          handleBackgroundChange={this.props.handleBackgroundChange}
          handleBackgroundColor={this.props.handleBackgroundColor}
          handleBackgroundImage={this.props.handleBackgroundImage}
        />
        <div className="board-nav">
          <div className="menu-wrapper">
            <button
              onClick={this.handleShowMenu}
              className="btn board-nav--title">
              {BoardName}
            </button>
            <button
              className="btn board-star" onClick={this.toggleYellow} style={{ color: `${this.state.starColor}` }}>
              <i className="far fa-star"></i>
            </button>
            <div className="full-team">
            
              <Team
                teamMembers={this.state.team} />
              <div className="team-size">
                {this.state.team.length}
              </div>

              <button className="invite-btn" onClick={this.handleInviteMember}><i className="fas fa-user-plus"></i>Invite</button>
            
              {
                inviteMember && (
                  <BoardTitleMenu
                    handleShowMenu={this.handleShowMenu}
                    handleNameSubmit={this.handleNameSubmit}
                    BoardName={BoardName}
                  />
                )}

              </div>
          </div>

          <button className="btn board-nav--menu" onClick={this.toggleCloseButton}><i className="fas fa-ellipsis-h"></i>Show Menu</button>
          {
            showNameMenu && (
              <BoardTitleMenu
                handleShowMenu={this.handleShowMenu}
                handleNameSubmit={this.handleNameSubmit}
                BoardName={BoardName}
              />
            )}

        </div>
      </div>
    )
  }
}

export default BoardNav;

// {this.state.team.map((member)=>
//   <Team
//     teamMembers={this.state.team} key={member.name}/>
//   )}  