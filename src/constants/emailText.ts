export const copyStyledText = (styledText: HTMLDivElement) => {
  if (styledText) {
    const range = document.createRange();
    range.selectNodeContents(styledText);
    const selection = window.getSelection();
    selection?.removeAllRanges(); // Clear any existing selections
    selection?.addRange(range);

    // Copy the selected content
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Failed to copy:', err);
    }

    // Cleanup: Deselect the selected content
    selection?.removeAllRanges();
  }
};
