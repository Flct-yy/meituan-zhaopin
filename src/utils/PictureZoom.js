function PictureZoom(w,value){
  const designWidth = 1473;
  const clientWidth = document.documentElement.clientWidth;
  const proportion = value/designWidth*(clientWidth>designWidth?clientWidth:designWidth)/w
  return proportion;
}

export default PictureZoom;