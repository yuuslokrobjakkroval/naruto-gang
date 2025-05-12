"use client"

import { useEffect, useRef } from "react"
import { Chart, type ChartConfiguration, RadarController, RadialLinearScale, LineElement, PointElement } from "chart.js"

// Register the required components
Chart.register(RadarController, RadialLinearScale, LineElement, PointElement)

interface CharacterData {
  name: string
  color: string
  stats: Array<{
    name: string
    value: number
    icon: string
  }>
}

interface ComparisonChartProps {
  character1: CharacterData
  character2: CharacterData
}

export default function ComparisonChart({ character1, character2 }: ComparisonChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Extract stat names and values
    const labels = character1.stats.map((stat) => stat.name)
    const char1Data = character1.stats.map((stat) => stat.value)
    const char2Data = character2.stats.map((stat) => stat.value)

    // Create the chart configuration
    const config: ChartConfiguration = {
      type: "radar",
      data: {
        labels,
        datasets: [
          {
            label: character1.name,
            data: char1Data,
            backgroundColor: `${character1.color}40`,
            borderColor: character1.color,
            pointBackgroundColor: character1.color,
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: character1.color,
          },
          {
            label: character2.name,
            data: char2Data,
            backgroundColor: `${character2.color}40`,
            borderColor: character2.color,
            pointBackgroundColor: character2.color,
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: character2.color,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              color: "rgba(255, 215, 0, 0.1)",
            },
            grid: {
              color: "rgba(255, 215, 0, 0.1)",
            },
            pointLabels: {
              color: "rgba(255, 215, 0, 0.7)",
              font: {
                size: 12,
              },
            },
            ticks: {
              backdropColor: "transparent",
              color: "rgba(255, 215, 0, 0.7)",
              z: 100,
              font: {
                size: 10,
              },
            },
            suggestedMin: 0,
            suggestedMax: 10,
          },
        },
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "rgba(255, 215, 0, 0.7)",
              font: {
                size: 12,
              },
              boxWidth: 15,
              padding: 15,
            },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            titleColor: "rgba(255, 215, 0, 1)",
            bodyColor: "rgba(255, 215, 0, 0.7)",
            borderColor: "rgba(255, 215, 0, 0.3)",
            borderWidth: 1,
          },
        },
      },
    }

    // Create the chart
    chartInstance.current = new Chart(ctx, config)

    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [character1, character2])

  return <canvas ref={chartRef} />
}
