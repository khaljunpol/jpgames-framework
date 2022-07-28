export enum Orientation {
  Landscape = 'ld',
  Portrait = 'pt',
}

export function getOrientation(width: number, height: number) {
  return width > height ? Orientation.Landscape : Orientation.Portrait;
}
