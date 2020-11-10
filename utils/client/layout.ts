// Get window width
export const getWinWidth = () => {
  const isServer = typeof window === 'undefined'

  let winWidth = 0
  if (!isServer) {
    if (window.innerWidth) {
      winWidth = window.innerWidth
    } else if (document.body && document.body.clientWidth) {
      winWidth = document.body.clientWidth
    }
  }

  return winWidth
}

// Whether it is a pc
export const isMobile = () => {
  return getWinWidth() < 1024
}
