import React, { Component } from "react";
import TeamMember from './teammember'
import info from "./memb.info";

class team extends Component {   
   constructor() {
      super()
      this.state = {
         info:info
      }
      this.showPic = this.showPic.bind(this);

   }


   showPic() {
      
      console.log(info)
   }
   
  

      mapping(x){
         const members = x.info.map(function (member) {
            return (
           <TeamMember
              key = {member.id}
              img={member.img}
              name={member.name}
              email={member.email}
              phone={member.phone} />)})
                                                  
            return members
      }
            render(){
              return (
             <div className="row container ">
                    {this.mapping(this.state)}
                    <button onClick={this.showPic} className="btn btn-primary">Click here</button>
             </div>
                     )
                     }
}

export default team