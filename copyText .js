// Copy Text to Clipboard
const copyText = async (text) => await navigator.clipboard.writeText(text);
copyText("One-liner JavaScript world");
