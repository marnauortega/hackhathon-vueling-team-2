package com.dgalan.vueling_hackaton.logistic.domain.model

import java.time.LocalDateTime

data class LogisticResult(
    val result: List<Logistic>,
    val isOk: Boolean
)

data class Logistic(
    val day: String,
    val hour: Int,
    val handlingFunction: String,
    val fullTimeEmployees: Int,
    val partTimeEmployees: Int,
    val totalEmployees: Int,
    val fullTimeCost: Double,
    val partTimeCost: Double,
    val totalCost: Double
)