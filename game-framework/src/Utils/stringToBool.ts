export function stringToBool(string) {
  switch (string.toLowerCase()) {
    case 'false':
    case 'no':
    case '0':
    case '':
      return false;
    default:
      return true;
  }
}
