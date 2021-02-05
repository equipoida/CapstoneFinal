package com.example.androidcapstone;

import java.util.List;

import retrofit2.Call;

import retrofit2.Response;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface JsonApi {
    //@GET("/api/mobile/board?category=성형외과")
    //Call<List<BoardData>> getBoard();

    @GET("/api/mobile/board")
    Call<List<BoardData>> getBoard(@Query("category") String category);

    @POST("/api/board")
    Call<BoardData> addPost(@Body BoardData boardData);


    //@GET("/api/board/comment/1")
    //Call<List<CommentData>> getComment();

    @PUT("/api/board/{no}")
    Call<Void> updateBoardData(@Path("no") int no, @Body BoardData boardData);

    @DELETE("/api/board/{no}")
    Call<Void> deleteUser(@Path("no") int no);   //수정필요

    @GET("/api/board/comment/{num}")
    Call<List<CommentData>> getComment(@Path("num") Integer num);

    @POST("api/board")
    Call<BoardData> post_posts(@Body BoardData boardData);
}
