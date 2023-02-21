package com.dgalan.vueling_hackaton.logistic.data.di

import com.dgalan.vueling_hackaton.logistic.data.datasource.LogisticDataSource
import com.dgalan.vueling_hackaton.logistic.data.datasource.LogisticDataSourceImp
import com.dgalan.vueling_hackaton.logistic.data.repository.LogisticRepositoryImpl
import com.dgalan.vueling_hackaton.logistic.domain.LogisticDomainLayerContract
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent

@Module
@InstallIn(SingletonComponent::class)
class LogisticDataModule() {

    @Provides
    fun provideLogisticRepository(remoteDataSource: LogisticDataSource.Remote)
            : LogisticDomainLayerContract.DataLayer.LogisticRepository =
        LogisticRepositoryImpl.apply {
            this.logisticRemoteDataSource = remoteDataSource
        }

    @Provides
    fun provideLogisticDataSource(logisticDataSourceImp: LogisticDataSourceImp): LogisticDataSource.Remote =
        logisticDataSourceImp
}