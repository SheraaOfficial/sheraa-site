
import { useRef, useEffect, useState } from "react"
import { Balloons } from "@/components/ui/balloons"
import { toast } from "sonner"

const WelcomeAnimation = () => {
  const balloonsRef = useRef<{ launchAnimation: () => void } | null>(null)
  const [hasVisited, setHasVisited] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const firstVisit = localStorage.getItem("sheraa-first-visit")
    
    if (!firstVisit) {
      // Mark that the user has visited
      localStorage.setItem("sheraa-first-visit", "true")
      setHasVisited(false)
      
      // Wait a moment before showing the animation
      const timer = setTimeout(() => {
        if (balloonsRef.current) {
          toast.success("Welcome to Sheraa's new website! 🚀", {
            duration: 5000
          })
          balloonsRef.current.launchAnimation()
        }
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  if (hasVisited) return null

  return (
    <Balloons 
      ref={balloonsRef}
      type="text"
      text="✨🎉🚀"
      fontSize={80}
      color="#000000"
    />
  )
}

export default WelcomeAnimation
