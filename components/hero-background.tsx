"use client"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient orbs */}
      <div className="absolute top-20 right-20 h-[200px] w-[200px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-60 blur-3xl" />
      <div className="absolute top-40 left-20 h-[150px] w-[150px] animate-pulse rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-orange-200 opacity-40 blur-2xl" />
      <div className="absolute bottom-40 right-40 h-[180px] w-[180px] animate-pulse rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-yellow-300 opacity-50 blur-3xl" />
      <div className="absolute bottom-20 left-40 h-[120px] w-[120px] animate-pulse rounded-full bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-200 opacity-30 blur-2xl" />

      {/* NexGen branded elements */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
        <div className="w-2 h-16 bg-gradient-to-b from-pink-500 to-transparent rounded-full opacity-30 animate-pulse" />
      </div>
      <div className="absolute top-1/3 right-10">
        <div className="w-16 h-2 bg-gradient-to-r from-orange-500 to-transparent rounded-full opacity-30 animate-pulse" />
      </div>

      {/* Floating NexGen "N" elements */}
      <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-pink-500/20 to-orange-400/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 animate-float">
        <span className="text-pink-600 font-bold text-sm">N</span>
      </div>
      <div
        className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-orange-500/20 to-yellow-400/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <span className="text-orange-600 font-bold text-xs">N</span>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
