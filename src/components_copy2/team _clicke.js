import React, { Component } from "react";
import TeamMember from './teammember'
import info from "./memb.info";


class team extends Component {
   constructor() {
      super()
      this.state = {
         info: info,
         newMember: [],
         counter:0
      }
      this.showPic = this.showPic.bind(this);

   }


   showPic() {
      if (this.state.counter< info.length) {
         this.state.newMember.push(this.state.info[this.state.counter])

         this.setState(function (prevStat) {
            return{ counter: prevStat.counter + 1}
         })

         this.newMember_Tow = this.state.newMember.map(function (member) {
            return (
               <TeamMember
                  key={member.id}
                  img={member.img}
                  name={member.name}
                  email={member.email}
                  phone={member.phone} />)
         })
      }
   }

   
render(){
   return (
      <div className="row container ">
         {this.newMember_Tow}
         <button onClick={this.showPic} className="btn btn-primary">Click here</button>
      </div>
   )
   }
}

export default team