// Atividade 1

export function getRhombusArea(D: number, d: number): number {
    return (d * D) / 2
  }

// Atividade 2

export function getTrapezoidArea(B: number, b: number, h: number): number {
    return ((B + b) * h) / 2
  }

// Atividade 3

export function getCircleArea(radius: number): number {
  return Math.PI * radius ** 2;
}