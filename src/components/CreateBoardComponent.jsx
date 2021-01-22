import React, { Component } from 'react';
import BoardService from '../service/BoardService';


class CreateBoardComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            title:'',
            question:''
            
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeQuestionHandler = this.changeQuestionHandler.bind(this);
        this.createBoard= this.createBoard.bind(this);
    }

    changeTitleHandler = (event) =>{
        this.setState({title:event.target.value});
    }
    changeQuestionHandler = (event) => {
        this.setState({question:event.target.value});
    }
    createBoard = (event) =>{
        event.preventDefault();
        let kin = {
            title:this.state.title,
            question:this.state.question
        };
        console.log("board=> "+JSON.stringify(kin));
        BoardService.createBoard(kin).then(res=>{
            this.props.history.push('/board');
        })
    
    }
    cancel(){
        this.props.history.push('/board');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">새글을 작성해주세요</h3>
                            <div className = "card-body">
                                <form>
                                    
                                    <div className = "form-group">
                                        <label> Title </label>
                                        <input type="text" placeholder="title" name="title" className="form-control" 
                                        value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Question  </label>
                                        <textarea placeholder="question" name="question" className="form-control" 
                                        value={this.state.contents} onChange={this.changeQuestionHandler}/>
                                    </div>
                                   
                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBoardComponent;