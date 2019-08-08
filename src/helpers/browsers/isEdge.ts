export default function isEdge() {
  try {
    // @ts-ignore
    return /Edge/.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}
