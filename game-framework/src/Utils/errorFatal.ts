/**
 * Used for fatal errors when something critical fails and UI prompt can not be expected to function.
 * Such as Missing WebGL support etc.
 * @param message
 * @returns
 */
export function errorFatal(message) {
  var w = document.createElement('div');
  w.id = 'fatal-error';

  w.style.zIndex = '4';
  w.style.color = 'white';
  w.style.width = '100%';
  w.style.height = '100%';

  w.style.position = 'fixed';
  w.style.background = 'black';
  w.style.height = '100%';
  w.style.height = '100%';
  w.style.textAlign = 'center';
  w.style.fontFamily = 'sans-serif';
  w.style.fontSize = '20px';
  w.style.opacity = '0.8';
  //Add your content to the DIV

  var m = document.createElement('div');
  m.id = 'fatal-error-msg';
  m.style.margin = '0';
  m.style.position = 'absolute';
  m.style.top = '50%';
  m.style.left = '50%';
  m.style.opacity = '1';
  m.style.transform = 'translate(-50%, -50%)';
  /**
     * margin: 0;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
     */
  //Add your content to the DIV
  m.innerHTML = message;

  w.appendChild(m);
  document.body.appendChild(w);
}
