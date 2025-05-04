
import { Balloons } from "@/components/ui/balloons"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export function TextBalloonsDemo() {
  const balloonsRef = useRef<{ launchAnimation: () => void } | null>(null)

  const handleLaunch = () => {
    if (balloonsRef.current) {
      balloonsRef.current.launchAnimation()
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">      
      <Button 
        onClick={handleLaunch}
      >
        Launch Text Balloons! 🎈
      </Button>

      <Balloons 
        ref={balloonsRef}
        type="text"
        text="🎈✨🎉"
        fontSize={120}
        color="#000000"
      />
    </div>
  )
}
