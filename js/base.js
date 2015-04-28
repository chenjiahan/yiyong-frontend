
var baseUrl = 'http://vip.lekangba.com/';

$(document).ready(function(){
  /*
   *  全选和反选
   */
  $("#selectAll").click(function () {
    $(".row :checkbox").prop("checked",true);;
  });
  $("#unSelect").click(function () {
    $(".row :checkbox").removeAttr("checked");
  });
});


//判断是否登录
function isLogin() {
  $.ajax({
    url: baseUrl + 'adminIsLogin',
    type: 'GET',
    dataType: 'json',
    data: {},
    success: function (data) {
      var obj = eval(data);
      if ( !obj.success ) {
        window.location.href = 'login.html';
      }
    }
  });
}

//登出
$('#logout').click( function() {
  $.ajax({
    url: baseUrl + 'adminLogout',
    type: 'GET',
    dataType: 'json',
    data: {
    },
    success: function (data) {
      var obj = eval(data);
      if( obj['success']) {
        alert('登出成功');
        window.location.href='login.html'
      } else {
        alert('登出失败');
      }
    }
  });
})