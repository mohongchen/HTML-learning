/**
 * 手风琴
 * {string} 颜色数组
 * {string} 剩余宽度
 */
// $.fn.accordion = function (colors, width) {
//   colors = colors || [];
//   width = width || 0;

//   var $li = this.find("li");
//   var boxLength = this.width();
//   var maxLength = boxLength - ($li.length - 1) * width;
//   var avgLength = boxLength / $li.length;

//   //更改li的颜色
//   $li.each(function (i, e) {
//     $(e).css("backgroundColor", colors[i]);
//   });

//   //给li注册鼠标经过事件
//   $li.on("mouseenter", function () {
//     $(this).stop().animate({
//       width: maxLength
//     }).siblings().stop().animate({
//       width: width
//     })
//   });

//   $li.on("mouseleave", function () {
//     $li.stop().animate({
//       width: avgLength
//     });
//   });
// };


// $.fn.accordion = function (colors, width) {
//   colors = colors || [];
//   width = width || 0;
//   var $li = this.find('li');
//   var boxLength = this.width();
//   var maxLength = boxLength - ($li.length - 1) * width;
//   var avgLength = boxLength / $li.length;
//   $li.each(function (i, e) {
//     $(e).css("backgroundColor", colors[i]);
//   });
//   $li.on('mouseenter', function () {
//     $(this).stop().animate({
//       width: maxLength
//     }).siblings().stop().animate({
//       width: width
//     })
//   });
//   $li.on('mouseleave', function () {
//     $li.stop().animate({
//       width: avgLength
//     });
//   });
// }