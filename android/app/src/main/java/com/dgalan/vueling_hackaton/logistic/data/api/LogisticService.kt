package com.dgalan.vueling_hackaton.logistic.data.api

import com.dgalan.vueling_hackaton.logistic.data.model.LogisticResultDto
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Headers
import retrofit2.http.Query

interface LogisticService {

    @Headers("authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQXV0aGVudGljYXRpb25BZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InlvdXJAZW1haWwuY29tIiwianRpIjoiMDAzNDg4N2QtYWFhZS00NDE3LTgwMzMtYmE5ZGQ1YzdjZTc5IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2NzcwMjc4MTcsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.YeA4p-29RZBzkWNoBKULvCPB_VJL14Go07ipGNM3iOg")
    @GET("/Handling")
    suspend fun getLogisticList(
        @Query("startDate") startDate: String = "2023/02/02",
        @Query("endDate") endDate: String = "2023/02/21"
    ): Response<LogisticResultDto?>
}