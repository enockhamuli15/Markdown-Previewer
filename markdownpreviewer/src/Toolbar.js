import React from "react";


class Toolbar extends React.Component{


    render(){
        return (

                  <div id='editTool' style={{margin: this.props.margin, width: this.props.wid}}>
                    <i className={this.props.class}></i>
                    <span id='name' style={{marginLeft: '10px'}}>{this.props.name}</span>
                    <span>{this.props.btn}</span>
                   </div>
             
        )
    }
    
}

export default Toolbar;