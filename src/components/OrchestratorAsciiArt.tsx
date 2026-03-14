import { useEffect, useState } from 'react'
import orchestratorImage from '../assets/orchestrator.png'

const asciiRamps = [
  '  .,:-+=xX$&',
  '   `.^";!iIYVHW',
  '  .-~+*#%@'
]
const defaultColumns = 72

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getAsciiColumns(viewportWidth: number) {
  if (viewportWidth < 480) return 38
  if (viewportWidth < 768) return 52
  return defaultColumns
}

function buildAsciiFrames(grid: number[][]) {
  return Array.from({ length: 6 }, (_, frame) => {
    const ramp = asciiRamps[frame % asciiRamps.length]
    const phase = frame * 0.9

    return grid
      .map((row, rowIndex) =>
        row
          .map((brightness, columnIndex) => {
            const pulse = brightness > 18
              ? Math.sin(columnIndex * 0.28 + rowIndex * 0.18 + phase) * 18
              : 0
            const adjusted = clamp(brightness + pulse, 0, 255)
            const rampIndex = Math.round((adjusted / 255) * (ramp.length - 1))
            return ramp[rampIndex]
          })
          .join('')
      )
      .join('\n')
  })
}

type OrchestratorAsciiArtProps = {
  className?: string
  ariaLabel?: string
}

export function OrchestratorAsciiArt({
  className = 'orchestrator-ascii',
  ariaLabel = 'ASCII rendering of the orchestrator illustration'
}: OrchestratorAsciiArtProps) {
  const [columns, setColumns] = useState(() =>
    typeof window === 'undefined' ? defaultColumns : getAsciiColumns(window.innerWidth)
  )
  const [frames, setFrames] = useState<string[]>([])
  const [frameIndex, setFrameIndex] = useState(0)
  const [renderError, setRenderError] = useState<string | null>(null)

  useEffect(() => {
    const handleResize = () => {
      const nextColumns = getAsciiColumns(window.innerWidth)
      setColumns((currentColumns) => (
        currentColumns === nextColumns ? currentColumns : nextColumns
      ))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let isCancelled = false
    const source = new Image()

    source.onload = () => {
      if (isCancelled) return

      try {
        const rows = Math.max(22, Math.round(columns * (source.height / source.width) * 0.52))
        const canvas = document.createElement('canvas')
        canvas.width = columns
        canvas.height = rows

        const context = canvas.getContext('2d', { willReadFrequently: true })
        if (!context) {
          throw new Error('Canvas 2D context is unavailable')
        }

        context.drawImage(source, 0, 0, columns, rows)
        const pixels = context.getImageData(0, 0, columns, rows).data
        const grid: number[][] = []

        for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
          const row: number[] = []

          for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
            const offset = (rowIndex * columns + columnIndex) * 4
            const red = pixels[offset]
            const green = pixels[offset + 1]
            const blue = pixels[offset + 2]
            const brightness = red * 0.299 + green * 0.587 + blue * 0.114
            row.push(brightness)
          }

          grid.push(row)
        }

        setFrames(buildAsciiFrames(grid))
        setFrameIndex(0)
        setRenderError(null)
      } catch {
        setRenderError('[ ascii render unavailable ]')
      }
    }

    source.onerror = () => {
      if (!isCancelled) {
        setRenderError('[ failed to load orchestrator.png ]')
      }
    }

    source.src = orchestratorImage

    return () => {
      isCancelled = true
    }
  }, [columns])

  useEffect(() => {
    if (frames.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const intervalId = window.setInterval(() => {
      setFrameIndex((currentFrame) => (currentFrame + 1) % frames.length)
    }, 140)

    return () => window.clearInterval(intervalId)
  }, [frames])

  const renderOutput = renderError ?? frames[frameIndex] ?? '[ building ascii frame buffer ]'

  return (
    <pre className={className} aria-label={ariaLabel}>
      {renderOutput}
    </pre>
  )
}
