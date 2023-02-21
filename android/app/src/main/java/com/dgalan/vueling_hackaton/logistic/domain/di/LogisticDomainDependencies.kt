package com.dgalan.vueling_hackaton.logistic.domain.di

import com.dgalan.vueling_hackaton.logistic.domain.LogisticDomainLayerContract
import com.dgalan.vueling_hackaton.logistic.domain.model.LogisticResult
import com.dgalan.vueling_hackaton.logistic.domain.usecase.GetLogisticUC
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent

@Module
@InstallIn(SingletonComponent::class)
class LogisticDomainModule() {

    @Provides
    fun provideGetLogisticUC(getLogisticUC: GetLogisticUC): @JvmSuppressWildcards LogisticDomainLayerContract.PresentationLayer.UseCase<LogisticResult> =
        getLogisticUC
}