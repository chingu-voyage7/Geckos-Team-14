import React, { Component } from "react";

class Team extends Component {
    state = {

    }

    render() {



        return (
            <div className="full-team-members">

                {this.props.teamMembers.map((member) =>
                    <div className="team-member" key={member.id} onClick={() => this.props.deleteMember(member.id)}>
                        {member.initials}
                    </div>
                )}


            </div>
        )
    }

}

export default Team;