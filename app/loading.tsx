export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#2c3e50] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-lg text-[var(--text-muted)]" style={{ fontFamily: "'Kalam', cursive" }}>
          Loading...
        </p>
      </div>
    </div>
  )
}
