package com.dgalan.vueling_hackaton.logistic.presentation.view

import android.os.Bundle
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.dgalan.vueling_hackaton.databinding.ActivityMainBinding
import com.dgalan.vueling_hackaton.logistic.domain.model.Logistic
import com.dgalan.vueling_hackaton.logistic.domain.model.LogisticResult
import com.dgalan.vueling_hackaton.logistic.presentation.viewmodel.LogisticViewModel
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.launch

@AndroidEntryPoint
class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private val logisticViewModel: LogisticViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        binding = ActivityMainBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        initViews()
        logisticCollect()
    }

    private fun logisticCollect() {
        lifecycleScope.launch {
            logisticViewModel.logistic.collect { logistic ->
                if (logistic != null) {
                    loadLogistic(data = logistic)
                }
            }
        }
    }

    private fun initViews() {
        with(binding.rvLogistic) {
            this.layoutManager = LinearLayoutManager(context)
            this.adapter = LogisticAdapter(context = context)
        }
    }

    private fun loadLogistic(data: LogisticResult) {
        (binding.rvLogistic.adapter as? LogisticAdapter)?.updateData(newData = data.result)
    }
}