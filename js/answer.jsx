import React from 'react';

class Answer extends React.Component{
    render(){

        return (
            <div className='mainBox'>
                <div className="answer">
                    <div className={this.props.class[0]}></div>
                    <div className={this.props.class[1]}></div>
                    <div className={this.props.class[2]}></div>
                    <div className={this.props.class[3]}></div>
                </div>
                <div className="checked">
                    <div className="miniCircle"></div>
                    <div className="miniCircle"></div>
                    <div className="miniCircle"></div>
                    <div className ="miniCircle"></div>
                </div>
            </div>
        )
    }
}
export {Answer};
