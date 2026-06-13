'use client'

import { useState, useEffect } from 'react'

export default function ScarcitySection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Set deadline to 7 days from now
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 7)

    const calculateTimeLeft = () => {
      const difference = deadline.getTime() - new Date().getTime()
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)
      setTimeLeft({ days, hours, minutes, seconds })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-6 bg-surface border-y border-primary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Message */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
              早鸟票<span className="text-primary">限时</span>抢购
            </h2>
            <p className="text-lg text-white/70">
              仅剩 {timeLeft.days} 天，锁定最低价格！早鸟票售完即止，切勿错过年度最强电音盛宴。
            </p>
          </div>

          {/* Right: Countdown */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: timeLeft.days, label: '天' },
              { value: timeLeft.hours, label: '时' },
              { value: timeLeft.minutes, label: '分' },
              { value: timeLeft.seconds, label: '秒' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-primary text-white text-4xl md:text-5xl font-display p-4 mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scarcity Bar */}
        <div className="mt-8">
          <div className="flex justify-between text-sm text-white/60 mb-2">
            <span>早鸟票进度</span>
            <span>已售 85%</span>
          </div>
          <div className="h-2 bg-surface overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse-fast" style={{ width: '85%' }}></div>
          </div>
          <p className="text-center text-accent mt-3 text-sm font-bold uppercase">
            ⚠️ 仅剩 237 张早鸟票
          </p>
        </div>
      </div>
    </section>
  )
}
