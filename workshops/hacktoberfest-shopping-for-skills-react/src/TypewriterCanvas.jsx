import { P5Canvas } from '@p5-wrapper/react'

function sketch(p) {
  let typewriterText = "Shop for skills. Ship PRs. Level up."
  let currentChar = 0
  let frameCount = 0
  let typeSpeed = 3

  p.setup = () => {
    p.createCanvas(600, 400)
    p.textFont('monospace')
    p.textAlign(p.CENTER, p.CENTER)
  }

  p.draw = () => {
    p.background(255)

    // Draw neo-brutalist SVG-like elements
    p.push()
    p.strokeWeight(4)
    p.stroke(0)
    p.noFill()

    // Red diagonal bars
    for (let i = 0; i < 5; i++) {
      p.line(i * 120 + 50, 50, i * 120 - 100, 350)
    }

    // Yellow rectangles
    p.fill(255, 249, 93, 150)
    p.noStroke()
    p.rect(100, 80, 120, 60)
    p.rect(400, 260, 100, 80)

    // Blue square
    p.fill(95, 155, 255, 150)
    p.noStroke()
    p.rect(450, 100, 80, 80)

    // Red square
    p.fill(255, 95, 95, 150)
    p.noStroke()
    p.rect(80, 240, 90, 90)
    p.pop()

    // Draw bold border
    p.push()
    p.stroke(0)
    p.strokeWeight(8)
    p.noFill()
    p.rect(4, 4, p.width - 8, p.height - 8)
    p.pop()

    // Typewriter text
    p.push()
    p.textSize(32)
    p.textStyle(p.BOLD)
    p.fill(0)
    let displayText = typewriterText.substring(0, currentChar)
    p.text(displayText + (frameCount % 40 < 20 ? '_' : ''), p.width / 2, p.height / 2)

    if (frameCount % typeSpeed == 0 && currentChar < typewriterText.length) {
      currentChar++
    }
    p.pop()

    frameCount++
  }
}

export default function TypewriterCanvas() {
  return <P5Canvas sketch={sketch} />
}
