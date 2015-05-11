
/*
 *  底部弹出消息框
 *  1.5秒后删除
 */
function showMsgBox(msg) {
  var box = "<div class='msg-box'>" + msg + "</div>"
  $('body').append(box);
  $('.msg-box').fadeIn(300);
  setTimeout(function(){
    $('.msg-box').fadeOut(300);
  },1400)
  setTimeout(function(){
    $(".msg-box").remove();
  },1700)
}