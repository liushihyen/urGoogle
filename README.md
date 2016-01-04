# urAD Google Jsvascript API v1.0.0

### Features

* Login with Facebook

### System requirement

* jQuery（只能跪了...）

### Usage

Initialize

```
facebookAuthModule.loadSDK({
	locale : 'en_US'
}).initSDK({
	appId : 'place your Facebook app id here',
	version : 'v2.5'
});
```

驗證使用者是否授權你的App，如果授權過，便會傳回使用者的資料

可以使用的Facebook Graph API User欄位請[參閱這裡](https://developers.facebook.com/docs/graph-api/reference/user#Reading)

```
$('#js-doFbLogin').on('click', '', {}, function(event) {
	event.preventDefault();
	facebookAuthModule.doFbAuth({
		scope : ['public_profile', 'email']
	}).then(function(util, response) {
		var userDf = util.getUser(['id', 'email', 'cover', 'devices']);
		userDf.then(function(response) {
			console.dir(response);
		});
	});
});
``` 
### TODO

* user's friend list
