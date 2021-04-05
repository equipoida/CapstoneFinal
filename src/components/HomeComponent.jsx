import React, { Component, useState } from 'react';
import BoardService from '../service/BoardService';
class HomeComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            p_num: 1,
            boards: [],
            search: "",
            hots:[],
            tags:""
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.getHotBoard();
        this.getPopularTag();

        this.searchKeyWord = this.searchKeyWord.bind(this);
    }


    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }
    searchKeyWord(search) {

        this.props.history.push(`/search-board/${search}`);

    }
    clearbtn = (event) => {
        this.setState({ search: '' });

    }

    GotoCategory(category) {
        this.props.history.push(`/category-board/${category}`);
    }
    GotoAdminpage() {
        this.props.history.push(`/manage`);
    }
    returnDate(board_date) {
        const dateString = board_date + ""
        let y = dateString.split("T"); //날짜 , 시간.00:00:00
        let yymmdd = y[0];
        let t = y[1] + "";
        let tt = t.split(".");
        let hhmmss = tt[0];
        return (
            <p>
                [ {yymmdd}, {hhmmss} ]
            </p>
        )
    }
    readBoard(num) {
        this.props.history.push(`/read-board/${num}`);
    }
    getHotBoard(){
        BoardService.getHotBoard().then((res)=>{
            this.setState({
                hots : res.data
            });
            
        });
    }
    getPopularTag(){
        BoardService.getPopularTag().then((res)=>{
            console.log("this.is"+res.data)
            this.setState({
                tags: res.data
                
            });
        });
        this.returnTag()
    }
    getRecentBoard(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards : res.data
            });
        });
    }
    
    returnTag() {
        const tag= this.state.tags+""
        console.log("string"+tag)
          let str01 =tag.split(",");
    
           return (
                <a className="hot">
                   #{str01[0]}<br/> 
                   #{str01[2]}<br/>
                   #{str01[4]}<br/>
                   #{str01[6]}<br/>
                   #{str01[8]}
               </a>
           )

    }

    render() {
        return (
            <body >
                <div class="container-fluid" >
                    <div class="row">
                        <div class="col-lg-2">
                            <div className="single-features text-center mt-30">
                                <div className="department-content text-center">
                                    <a onClick={()=> this.props.history.push('/mypage')}>
                                        <h4 className="department-title">계정</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="single-features text-center mt-30">
                                <div className="department-content text-center">
                                    <h4 className="department-title" a onClick={() => this.GotoAdminpage()}>광고</h4>
                                  
                                </div>
                            </div>
                        </div>
                        
                        <div className="row col-lg-7">
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("자유게시판")}><h4 className="department-title">자유게시판</h4></a>
                                        {this.getRecentBoard("정형외과")}
                                        <table>
                                            <tbody>
                                                {this.state.boards.map(
                                                board =>
                                                <tr>
                                                    <a className="hot" onClick={()=>this.getRecentBoard("정형외과")}>{board.title}</a> 👍{board.board_like}📄
                                                </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("정형외과")}><h4 className="department-title">정형외과</h4></a>
                                        {this.getRecentBoard("정형외과")}
                                        <table>
                                            <tbody>
                                                
                                                {this.state.boards.map(
                                                board =>
                                                <tr>
                                                    <a className="hot" onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 👍{board.board_like}📄
                                                </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("신경외과")}><h4 className="department-title">신경외과</h4></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("비뇨기과")}><h4 className="department-title">비뇨기과</h4></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("성형외과")}><h4 className="department-title">성형외과</h4></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("한방과")}><h4 className="department-title">한방과</h4></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("피부과")}><h4 className="department-title">피부과</h4></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("내과")}><h4 className="department-title">내과</h4></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("치과")}><h4 className="department-title">치과</h4></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("이비인후과")}><h4 className="department-title">이비인후과</h4></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("소아과")}><h4 className="department-title">소아과</h4></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("안과")}><h4 className="department-title">안과</h4></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <table>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="검색하기"
                                            name="search" value={this.state.search}
                                            className="form-control" onChange={this.handleSearchChange} />
                                    </td>
                                    <td><button className="btn btn-outline-secondary btn-search" onClick={() => this.searchKeyWord(this.state.search)}>Search</button></td>
                                </tr>
                            </table>
                            <div >
                                <div className="single-department-two mt-30">
                                    <div className="department-content text-center">
                                        <h4 className="department-title">
                                            #인기태그
                                            </h4>
                                        <p className="text">
                                            {this.returnTag()}                                           
                                        </p>
                                    </div>
                                    <div className="department-content text-center">
                                        <h4 className="department-title">
                                            HOT 게시물                                          
                                        </h4>
                                        <table>
                                            <tbody>
                                                {this.state.hots.map(
                                                hot =>
                                                <tr>
                                                    <a className="hot" onClick={()=>this.readBoard(hot.board_no)}>{hot.title}</a> 👍{hot.board_like}📄
                                                </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </body >
        );
    }
}

export default HomeComponent;