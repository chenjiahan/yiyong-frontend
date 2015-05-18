<?php
	$code = $_GET['code'];
	$state = $_GET['state'];
	$url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx3babb3b6ac2e14af&secret=5e69077a80dc378b45292f8cc512fb7d&code=$code&grant_type=authorization_code";
	$data = json_decode(file_get_contents($url),TRUE);
    echo "<script>document.location='http://vip.yiyon.com.cn/yiyong-frontend/mLogin.html?openid=".$data['openid']."';</script>";
?>
