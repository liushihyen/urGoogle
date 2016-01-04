# urAD Google Jsvascript API v1.0.0

### Features

* Login with Google

### System requirement

* jQuery（只能跪了...）

### Installation

bower install urGoogle

### Usage

Initialize

```
googleUserAuthModule.initSDK('place your client id',{
		
}).then(function() {
	// do something
});
```

驗證使用者是否授權你的App，如果授權過，便會傳回使用者的資料

```
$('#js-doGoogleLogin').on('click', '', {}, function(event) {

	event.preventDefault();
	googleUserAuthModule.doAuth().then(function(user) {
		console.dir(user.id);
		console.dir(user.name);
		console.dir(user.imageUrl);
		console.dir(user.email);
	})
});
``` 
### TODO

* 改為完全不用相依在jQuery上