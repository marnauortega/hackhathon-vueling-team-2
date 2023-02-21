package com.dgalan.vueling_hackaton.common.utils

import android.os.Build.VERSION_CODES
import androidx.annotation.RequiresApi
import com.dgalan.vueling_hackaton.logistic.data.model.LogisticDto
import com.dgalan.vueling_hackaton.logistic.data.model.LogisticResultDto
import com.dgalan.vueling_hackaton.logistic.domain.model.Logistic
import com.dgalan.vueling_hackaton.logistic.domain.model.LogisticResult
import java.text.SimpleDateFormat
import java.util.Locale

fun LogisticResultDto?.toLogisticResult(): LogisticResult =
    LogisticResult(
        this?.result?.toLogistic() ?: emptyList(),
        this?.isOk ?: false
    )

@RequiresApi(VERSION_CODES.O)
private fun List<LogisticDto>.toLogistic(): List<Logistic> =
    this.map { dto ->
        with(dto) {
            Logistic(
                transformDate(day),
                hour,
                handlingFunction,
                fullTimeEmployees,
                partTimeEmployees,
                totalEmployees,
                fullTimeCost,
                partTimeCost,
                totalCost
            )
        }
    }

fun transformDate(day: String): String {
    val inputFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss", Locale.getDefault())
    val outputFormat = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault())

    val inputDate = inputFormat.parse(day)

    return outputFormat.format(inputDate)
}


