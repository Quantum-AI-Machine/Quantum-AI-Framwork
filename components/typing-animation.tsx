'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  text: string
  delay?: number
  onComplete?: () => void
}

export function TypingAnimation({ text, delay = 50, onComplete }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, delay, text, onComplete])

  return <span>{displayText}</span>
}

