"use client"

import React from "react"
import { animated, useSpring } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

interface FadeInProps {
  children: React.ReactNode
  className?: string
}

const FadeIn = ({ children, className }: FadeInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  })

  const styles = useSpring({
    opacity: inView ? 1 : 0.3,
    transform: inView ? "translateY(0)" : "translateY(5rem)",
    config: {
      duration: 500,
    },
  })

  return (
    <animated.div ref={ref} style={styles} className={className}>
      {children}
    </animated.div>
  )
}
export default FadeIn
