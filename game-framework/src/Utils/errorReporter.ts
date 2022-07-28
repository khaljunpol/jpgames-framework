import CORE from '../Dragon/Store/Core';

export function reportError(message) {
  let state = CORE.getState();

  // skip if errorUrl is not configured
  if (!state.config.errorUrl) return;

  console.log('Posting Error:', message);
  fetch(state.config.errorUrl, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
      playerId: state.config.playerId,
      traceId: state.config.traceId,
      userAgent: navigator.userAgent,
      gameId: state.config.gameId,
      practice: state.config.practice,
      serverUrl: state.config.serverUrl,
      iid: state.config.iId,
      context: state.config.context,
      locale: state.config.locale,
    }),
  })
    .then(response => response.json())
    .then(data => {
      // console.log("Success:", data);
    })
    .catch(error => {
      console.error('Error:' + error);
    });
}
