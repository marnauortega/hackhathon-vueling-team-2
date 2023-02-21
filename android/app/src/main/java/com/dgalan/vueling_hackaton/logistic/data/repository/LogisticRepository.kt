package com.dgalan.vueling_hackaton.logistic.data.repository

import com.dgalan.vueling_hackaton.common.utils.toLogisticResult
import com.dgalan.vueling_hackaton.logistic.data.datasource.LogisticDataSource
import com.dgalan.vueling_hackaton.logistic.domain.LogisticDomainLayerContract
import com.dgalan.vueling_hackaton.logistic.domain.model.LogisticResult

object LogisticRepositoryImpl : LogisticDomainLayerContract.DataLayer.LogisticRepository {

    lateinit var logisticRemoteDataSource: LogisticDataSource.Remote

    override suspend fun getLogisticList(): Result<LogisticResult> =
        try {
            logisticRemoteDataSource.getLogisticListResponse().map { dto ->
                dto.toLogisticResult()
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
}
