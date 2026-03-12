// src/components/TalkingPerson.tsx
//
// Animated "speaking head" logo — ported from React Native to pure SVG/CSS.
//
// Layout: canvas is 1.25× wider than tall.
//   • Left ~40% — face (right-facing profile), back of head shifted slightly left.
//   • Right ~60% — three curved arc waves rippling rightward from the mouth.
//
// Original: Twemoji speaking-head (36×36 viewBox).
// Waves:    three curved arcs centred on mouth (~22,23), radii 4 / 7 / 10 units.
// Animation: staggered fade+translate outward, 220 ms apart, 1400 ms cycle.

const HEAD_PATH =
  'M27.979 14.875c-1.42-.419-2.693-1.547-3.136-2.25c-.76-1.208.157-1.521-.153-4.889C24.405 4.653 20.16 1.337 15 1c-2.346-.153-4.786.326-7.286 1.693c-6.42 3.511-8.964 10.932-4.006 18.099c4.47 6.46.276 9.379.276 9.379s.166 1.36 2.914 3.188c2.749 1.827 6.121.588 6.121.588s1.112-3.954 4.748-3.59c2.606.384 6.266-.129 7.191-1.024c.865-.837-.151-1.886.539-4.224c-2.365-.232-3.665-1.359-3.79-2.948c2.625.255 3.708-.578 4.458-1.495c-.021-.54-.075-1.686-.127-2.454c2.322-.672 3.212-2.962 1.941-3.337z'

// Three curved arcs fanning rightward from the mouth (~22,23), radii 4 / 7 / 10.
const WAVE_PATHS = [
  'M 25.957,19.476 A 4.600,4.600 0 0,1 25.957,26.524 L 25.185,25.605 A 3.400,3.400 0 0,0 25.185,20.395 Z',
  'M 27.885,17.178 A 7.600,7.600 0 0,1 27.885,28.822 L 27.114,27.903 A 6.400,6.400 0 0,0 27.114,18.097 Z',
  'M 29.814,14.880 A 10.600,10.600 0 0,1 29.814,31.120 L 29.042,30.201 A 9.400,9.400 0 0,0 29.042,15.799 Z',
]

// Match the React Native HEAD_SHIFT_UNITS = -0.5
// Canvas is 1.25× wide → viewBox width = 1.25 × 36 = 45 units
const HEAD_SHIFT = -0.5   // SVG units — shifts head left, clips back of skull
const VB_W       = 45     // 1.25 × 36
const STAGGER    = 220    // ms between waves
const CYCLE      = 1400   // ms full cycle

export default function TalkingPerson({
  size = 32,
  headColor = '#F5F0E8',
  waveColor = '#E8381A',
}: {
  size?: number
  headColor?: string
  waveColor?: string
}) {
  const canvasW = size * 1.25

  return (
    <svg
      width={canvasW}
      height={size}
      viewBox={`${HEAD_SHIFT} 0 ${VB_W} 36`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      {/* Static head — back of head clips at left canvas edge */}
      <path d={HEAD_PATH} fill={headColor} />

      {/* Animated arc waves — CSS keyframes, staggered */}
      {WAVE_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={waveColor}
          style={{
            animation: `tpWave ${CYCLE}ms ease-in-out infinite`,
            animationDelay: `${i * STAGGER}ms`,
          }}
        />
      ))}

      <style>{`
        @keyframes tpWave {
          0%   { opacity: 0;   transform: translateX(0)          scale(0.75); }
          8%   { opacity: 1; }
          60%  { opacity: 0.8; transform: translateX(1.2px)      scale(1.15); }
          100% { opacity: 0;   transform: translateX(1.2px)      scale(1.15); }
        }
      `}</style>
    </svg>
  )
}