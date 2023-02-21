package com.dgalan.vueling_hackaton.logistic.presentation.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.dgalan.vueling_hackaton.logistic.domain.LogisticDomainLayerContract
import com.dgalan.vueling_hackaton.logistic.domain.model.LogisticResult
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class LogisticViewModel @Inject constructor(
    val getLogisticUC: LogisticDomainLayerContract.PresentationLayer.UseCase<LogisticResult>
) : ViewModel(), LogisticViewModelContract {

    init {
        getLogisticUC()
    }

    val logistic: StateFlow<LogisticResult?>
        get() = _logistic.asStateFlow()
    private var _logistic: MutableStateFlow<LogisticResult?> = MutableStateFlow(null)

    override fun getLogisticUC() {
        viewModelScope.launch {
            getLogisticUC.invoke().onSuccess { logistic ->
                _logistic.value = logistic
            }.onFailure { th ->
                th.printStackTrace()
            }
        }
    }
}