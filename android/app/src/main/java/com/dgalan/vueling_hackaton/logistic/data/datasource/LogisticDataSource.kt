package com.dgalan.vueling_hackaton.logistic.data.datasource

import com.dgalan.vueling_hackaton.logistic.data.api.LogisticService
import com.dgalan.vueling_hackaton.logistic.data.datasource.LogisticDataSource.Remote
import com.dgalan.vueling_hackaton.logistic.data.model.LogisticResultDto
import retrofit2.Response
import retrofit2.Retrofit
import javax.inject.Inject

interface LogisticDataSource {

    interface Remote {

        suspend fun getLogisticListResponse(): Result<LogisticResultDto?>
    }
}

class LogisticDataSourceImp @Inject constructor(
    private val retrofitInstance: Retrofit,
) : Remote {

    override suspend fun getLogisticListResponse(): Result<LogisticResultDto?> {
        val retrofitResponse: Response<LogisticResultDto?> =
            retrofitInstance.create(LogisticService::class.java).getLogisticList()
        return retrofitResponse.runCatching { body() }
    }
}