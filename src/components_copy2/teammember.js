import React,{Component} from "react";

class teamMember extends Component {

    render() {
    return (
        <div className=" col-3 col-sm-4 justify-content-center">  
            <div className="card">
                <div className="card-header">  
                    <img src={this.props.img} alt=""></img>  
                    
                </div> 

                <div className="card-body" style={{backgroundColor: this.props.email ? 'white':'black'}}>
                    <h2>{this.props.name } </h2>    
                    <h3>{this.props.phone}</h3>
                    <p>{this.props.email}</p> 

               </div> 
            
            </div>

        </div>
    )
}

}

    
export default teamMember