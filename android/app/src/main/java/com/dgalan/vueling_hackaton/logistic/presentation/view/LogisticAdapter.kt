package com.dgalan.vueling_hackaton.logistic.presentation.view

import android.annotation.SuppressLint
import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.RecyclerView
import com.dgalan.vueling_hackaton.R
import com.dgalan.vueling_hackaton.logistic.domain.model.Logistic

class LogisticAdapter(
    private val data: MutableList<Logistic> = mutableListOf(),
    private val context: Context

) : RecyclerView.Adapter<LogisticAdapter.LogisticViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): LogisticViewHolder {
        val rootView: View = LayoutInflater.from(parent.context).inflate(R.layout.logistic_adapter_row, parent, false)
        return LogisticViewHolder(itemView = rootView)
    }

    override fun onBindViewHolder(holder: LogisticViewHolder, position: Int) {
        holder.bindData(data[position])
    }

    override fun getItemCount(): Int = data.size

    fun updateData(newData: List<Logistic>) {
        data.addAll(newData.toMutableList())
        notifyDataSetChanged()
    }

    inner class LogisticViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {

        private val tvHandlingFunction: TextView by lazy { itemView.findViewById(R.id.tv_handling_function) }
        private val tvHour: TextView by lazy { itemView.findViewById(R.id.tv_hour) }
        private val tvDay: TextView by lazy { itemView.findViewById(R.id.tv_day) }
        private val tvFullTime: TextView by lazy { itemView.findViewById(R.id.tv_full_time_employees) }
        private val tvPartTime: TextView by lazy { itemView.findViewById(R.id.tv_part_time_employees) }
        private val tvFullCost: TextView by lazy { itemView.findViewById(R.id.tv_full_cost) }
        private val tvPartCost: TextView by lazy { itemView.findViewById(R.id.tv_part_cost) }
        private val tvTotalCost: TextView by lazy { itemView.findViewById(R.id.tv_total_cost) }

        @SuppressLint("SetTextI18n")
        fun bindData(logistic: Logistic) {
            val fullTimeCostFormatted = String.format("%.2f", logistic.fullTimeCost)
            val partTimeCostFormatted = String.format("%.2f", logistic.partTimeCost)
            val totalCostFormatted = String.format("%.2f", logistic.totalCost)
            imgSet(logistic.handlingFunction)
            tvHandlingFunction.text = logistic.handlingFunction
            tvHour.text = "${logistic.hour}:00h"
            tvDay.text = logistic.day
            tvFullTime.text = logistic.fullTimeEmployees.toString()
            tvPartTime.text = logistic.partTimeEmployees.toString()
            tvFullCost.text = fullTimeCostFormatted + "€"
            tvPartCost.text = partTimeCostFormatted + "€"
            tvTotalCost.text = totalCostFormatted + "€"
        }

        private fun imgSet(function: String) {
            val drawable1 = ContextCompat.getDrawable(context, R.drawable.ic_jardinera)
            val drawable2 = ContextCompat.getDrawable(context, R.drawable.ic_equipaje)
            val drawable3 = ContextCompat.getDrawable(context, R.drawable.ic_coordination)
            when(function) {
                "JARDINERA" -> tvHandlingFunction.setCompoundDrawablesWithIntrinsicBounds(drawable1, null, null, null)
                "EQUIPAJES" -> tvHandlingFunction.setCompoundDrawablesWithIntrinsicBounds(drawable2, null, null, null)
                else -> tvHandlingFunction.setCompoundDrawablesWithIntrinsicBounds(drawable3, null, null, null)
            }
        }

    }

}