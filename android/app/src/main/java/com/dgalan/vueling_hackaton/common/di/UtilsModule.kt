package com.dgalan.vueling_hackaton.common.di

import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import retrofit2.Converter
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object UtilsModule {

    @Singleton
    @Provides
    fun provideMoshiConvertFactory(): Converter.Factory =
        MoshiConverterFactory.create()

    @Singleton
    @Provides
    fun provideRetrofit(converterFactory: Converter.Factory): Retrofit =
        Retrofit.Builder()
            .baseUrl("https://vuelingemployee-api.azurewebsites.net")
            .addConverterFactory(converterFactory)
            .build()
}