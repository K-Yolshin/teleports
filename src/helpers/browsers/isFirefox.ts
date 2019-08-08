export default function isFirefox() {
  try {
    // @ts-ignore
    return InstallTrigger !== undefined;
  } catch (e) {
    return false;
  }
}
