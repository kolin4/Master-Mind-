import React from 'react';

class Answer extends React.Component{
    render(){

        return (
            <div className='mainBox'>
                <div className="answer">
                    <div data-key = '1' data-disable={this.props.disabled}  onClick={this.props.action} className={this.props.class[0]}></div>
                    <div data-key = '2' data-disable={this.props.disabled}  onClick={this.props.action} className={this.props.class[1]}></div>
                    <div data-key = '3' data-disable={this.props.disabled}  onClick={this.props.action} className={this.props.class[2]}></div>
                    <div data-key = '4' data-disable={this.props.disabled} onClick={this.props.action} className={this.props.class[3]}></div>
                </div>
                <div className="checked">
                    <div className={this.props.checked[0]}></div>
                    <div className={this.props.checked[1]}></div>
                    <div className={this.props.checked[2]}></div>
                    <div className ={this.props.checked[3]}></div>
                </div>
            </div>
        )
    }
}
export {Answer};
