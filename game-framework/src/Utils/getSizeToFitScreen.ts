export function getSizeToFitScreen(content: any, screen: any) {
  if (screen.width / screen.height > content.width / content.height) {
    return {
      width: content.width * (screen.height / content.height),
      height: screen.height,
    };
  } else {
    return {
      width: screen.width,
      height: content.height * (screen.width / content.width),
    };
  }
}
