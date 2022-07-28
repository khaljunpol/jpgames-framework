import { getSizeToFitScreen } from './getSizeToFitScreen';

export function fitContentOnScreen(o: any) {
  var content = o.content;
  var contentDimensions = o.contentDimensions || o.content;

  var size = getSizeToFitScreen(contentDimensions, {
    width: o.screen.width,
    height: o.screen.height,
  });
  content.x = o.screen.x + (o.screen.width - size.width) / 2;
  content.y = o.screen.y + (o.screen.height - size.height) / 2;
  content.width = size.width;
  content.height = size.height;
}
