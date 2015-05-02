
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

var genUpToken = function(accessKey, secretKey, putPolicy) {

  //SETP 2
  var put_policy = JSON.stringify(putPolicy);
  console && console.log("put_policy = ", put_policy);

  //SETP 3
  var encoded = base64encode(utf16to8(put_policy));
  console && console.log("encoded = ", encoded);

  //SETP 4
  var hash = CryptoJS.HmacSHA1(encoded, secretKey);
  var encoded_signed = hash.toString(CryptoJS.enc.Base64);
  console && console.log("encoded_signed=", encoded_signed)

  //SETP 5
  var upload_token = accessKey + ":" + safe64(encoded_signed) + ":" + encoded;
  console && console.log("upload_token=", upload_token)
  return upload_token;
};