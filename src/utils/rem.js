function setHtmlFontSize() {
  const designWidth = 1473; // 设计稿宽度
  const html = document.documentElement;
  html.style.fontSize = `${16/designWidth * (html.clientWidth>1473?html.clientWidth:designWidth)}px`;
}

// 监听屏幕尺寸变化
window.addEventListener('resize', setHtmlFontSize);

export default setHtmlFontSize;