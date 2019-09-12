/**
 * 背景颜色
 */
$.fn.bgColor = function (color) {
  //this是一个jq对象
  this.css("backgroundColor", color);

  return this;
};