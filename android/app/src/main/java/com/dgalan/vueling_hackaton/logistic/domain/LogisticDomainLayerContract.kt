package com.dgalan.vueling_hackaton.logistic.domain

import com.dgalan.vueling_hackaton.logistic.domain.model.LogisticResult

interface LogisticDomainLayerContract {

    interface PresentationLayer {
        interface UseCase<T> {

            suspend operator fun invoke(): Result<T>
        }
    }

    interface DataLayer {
        interface LogisticRepository {

            suspend fun getLogisticList(): Result<LogisticResult>
        }
    }
}