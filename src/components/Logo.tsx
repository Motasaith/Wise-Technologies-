export default function Logo({ className = '' }: { className?: string }) {
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
        fill="#2C2C2C"
      >
        Wise
      </text>
      <text
        x="0"
        y="85"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
        fill="#2C2C2C"
      >
        Techn
      </text>
      <text
        x="108"
        y="85"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
        fill="#5C5C5C"
      >
        o
      </text>
      <text
        x="132"
        y="85"
        fontFamily="'Segoe UI', Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
        fill="#2C2C2C"
      >
        logies
      </text>
      <text
        x="2"
        y="110"
        fontFamily="'Brush Script MT', 'Segoe Script', cursive"
        fontSize="22"
        fontStyle="italic"
        fill="#7A7A7A"
      >
        A Web Solution Provider
      </text>
    </svg>
  )
}
