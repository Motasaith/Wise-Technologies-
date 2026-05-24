import { useTheme } from '../context/ThemeContext'

export default function Logo({ className = '' }: { className?: string }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <svg
      viewBox="0 0 400 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="45"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
        fill={isDark ? '#ffffff' : '#333333'}
      >
        Wise
      </text>
      <text
        x="0"
        y="85"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
        fill={isDark ? '#ffffff' : '#333333'}
      >
        Techn
      </text>
      <text
        x="108"
        y="85"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
        fill="#00D4FF"
      >
        o
      </text>
      <text
        x="132"
        y="85"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
        fill={isDark ? '#ffffff' : '#333333'}
      >
        logies
      </text>
      <text
        x="2"
        y="110"
        fontFamily="'Brush Script MT', 'Segoe Script', cursive"
        fontSize="22"
        fontStyle="italic"
        fill={isDark ? '#aaaaaa' : '#666666'}
      >
        A Web Solution Provider
      </text>
    </svg>
  )
}
