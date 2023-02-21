package com.dgalan.vueling_hackaton.logistic.domain.usecase

import com.dgalan.vueling_hackaton.logistic.domain.LogisticDomainLayerContract
import com.dgalan.vueling_hackaton.logistic.domain.model.LogisticResult
import javax.inject.Inject

class GetLogisticUC @Inject constructor(
    private val logisticRepository: LogisticDomainLayerContract.DataLayer.LogisticRepository
) : LogisticDomainLayerContract.PresentationLayer.UseCase<LogisticResult> {

    override suspend fun invoke(): Result<LogisticResult> = logisticRepository.getLogisticList()
}