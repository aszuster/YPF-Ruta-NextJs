import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function useBreakPoints() {
  const [breakPoints, setBreakPoints] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isBigDesktop: false,
  })

  const bpIsMobile = useMediaQuery({ maxWidth: 549 })
  const bpIsTablet = useMediaQuery({
    minWidth: 550,
    maxWidth: 1099,
  })
  const bpIsDesktop = useMediaQuery({ minWidth: 1100 })
  const bpIsBigDesktop = useMediaQuery({ minWidth: 1424 })

  useEffect(() => {
    setBreakPoints({
      isMobile: bpIsMobile,
      isTablet: bpIsTablet,
      isDesktop: bpIsDesktop,
      isBigDesktop: bpIsBigDesktop,
    })
  }, [bpIsMobile, bpIsTablet, bpIsDesktop, bpIsBigDesktop])

  return breakPoints
}
