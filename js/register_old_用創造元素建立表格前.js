// JQ
$(document).ready(function () {

	// 事件：輸入框
	$("input").on({
		// 滑鼠移入
		mouseenter: function () {
			$(this).css("border-color", "yellowgreen");
		},
		// 滑鼠移出
		mouseleave: function () {
			$(this).css("border-color", "rgb(233, 233, 233)");
		},
		// 點擊Input時
		focus: function () {
			$(this).css("background-color", "rgb(251, 255, 223)");
		},
		// 移開Input時
		blur: function () {
			/**
				<p>  ← 父元素
				├── Text(帳　　號：)
				├── <input> ← 你操作的元素 $(this)
				├── <span> ← n.next("span") 會找到這個
				</p>

				next() 只能找「同一層（兄弟）且在後面」的元素
				如果你想找「同一層前面的」，要用 prev()
			 */
			let spanText = $(this).next("span").text(); // 抓到input旁邊的span的文字
			console.log(spanText);
			if (spanText == "❌") {
				$(this).css("background-color", "pink");
			} else {
				$(this).css("background-color", "white");
			}


		},
	});

});




// JS方法
const userdatas = [	// 醜：打的時候少加 =
	{ username: "帳號", password: "密碼", email: "郵箱", phone: "手機", birth: "生日" },
	{ username: "0", password: "0", email: "0", phone: "0", birth: "0" }
];

// 提交資料
function bt_submit() {
	const inp_username = document.getElementById("inp_username").value;
	const inp_password = document.getElementById("inp_password").value;
	const inp_passwordAgain = document.getElementById("inp_passwordAgain").value;
	const inp_email = document.getElementById("inp_email").value;
	const inp_phone = document.getElementById("inp_phone").value;
	const inp_birth = document.getElementById("inp_birth").value;


	// 暫)超過十個不加入
	if (userdatas.length > 10) {
		alert("資料已滿");
		return;
	}


	// 拆分區塊與檢查
	const pushInput = {
		username: inp_username,
		password: inp_password,
		email: inp_email,
		phone: inp_phone,
		birth: inp_birth
	};



	change_username();
	change_password();
	change_passwordAgain();
	change_email();
	change_phone();
	change_birth();

	// 醜：不是用[index]來指定位置，而是用.object指定目標，這個是object矩陣{}
	if (pushInput.username === "" || pushInput.password === "") {
		console.log(inp_username);
		// alert("帳號或密碼未輸入");
		return;

	}

	if (change_username() && change_password() && change_passwordAgain() && change_email() && change_phone() && change_birth()) {
		userdatas.push(pushInput);

		// 跳出提示
		alert(
			`送出成功！\n\n ` +
			`帳　　號: ${inp_username},\n ` +
			`密　　碼: ${inp_password},\n ` +
			`電子郵箱: ${inp_email},\n ` +
			`手機號碼: ${inp_phone},\n ` +
			`出生日期: ${inp_birth}`
		);

		// 更新一次
		bt_check();


		// 恢復初始值
		bt_remove();
	}







};


// 檢查：帳號是否重複-開始
function change_username() {
	const inp_username = document.getElementById("inp_username").value;
	let isblank = false;
	let isrepeat = false;

	// 帳號不得為空
	if (inp_username != "") {
		for (let userdata of userdatas) {
			if (inp_username === userdata.username) {

				isrepeat = true;
				break;

			}
		}
	} else {
		isblank = true;
	}

	// 驗證(沒有空白&&沒有重複)
	if (!isblank && !isrepeat) {
		document.getElementById("pass_username").outerHTML =
			`<span id="pass_username">✔️</span>`;
		return true;
	} else {
		let text = ``;
		if (isblank) {
			text = `<span id="pass_username" title="帳號不得為空白">❌</span>`;
		}
		if (isrepeat) {
			text = `<span id="pass_username" title="帳號重複">❌</span>`;
		}

		document.getElementById("pass_username").outerHTML = text
		// submit時改變顏色
		$("#inp_username").css("background-color", "pink");
		return false;
	}
}
// 檢查：帳號是否重複-結束


// 檢查：密碼格式-開始
function change_password() {
	const inp_password = document.getElementById("inp_password").value;
	let ispass = true;

	// 密碼不得為空
	if (inp_password == "") {
		ispass = false;
	}
	// 密碼長度小於8
	if (inp_password.length < 8) {
		ispass = false;
	}

	// 驗證
	if (ispass) {
		document.getElementById("pass_password").outerHTML =
			`<span id="pass_password">✔️</span>`;
		return true;
	} else {
		document.getElementById("pass_password").outerHTML =
			`<span id="pass_password" title="密碼格式不符">❌</span>`;
		// submit時改變顏色
		$("#inp_password").css("background-color", "pink");
		return false;
	}
}
// 檢查：密碼格式-結束


// 檢查：重複密碼格式-開始
function change_passwordAgain() {
	const inp_passwordAgain = document.getElementById("inp_passwordAgain").value;
	const inp_password = document.getElementById("inp_password").value;
	let ispass = true;

	// 輸入不得為空
	if (inp_password == "") {
		ispass = false;
	}
	// 密碼是否一致
	if (inp_passwordAgain != inp_password) {
		ispass = false;
	}

	// 驗證
	if (ispass) {
		document.getElementById("pass_passwordAgain").outerHTML =
			`<span id="pass_passwordAgain">✔️</span>`;
		return true;
	} else {
		document.getElementById("pass_passwordAgain").outerHTML =
			`<span id="pass_passwordAgain" title="密碼格式不符">❌</span>`;
		// submit時改變顏色
		$("#inp_passwordAgain").css("background-color", "pink");
		return false;
	}
}
// 檢查：重複密碼格式-結束


// 檢查：電子郵箱格式-開始
function change_email() {
	const inp_email = document.getElementById("inp_email").value;
	let ispass = true;

	// 電子郵箱不得為空
	if (inp_email == "") {
		ispass = false;
	}

	// 驗證
	if (ispass) {
		document.getElementById("pass_email").outerHTML =
			`<span id="pass_email">✔️</span>`;
		return true;
	} else {
		document.getElementById("pass_email").outerHTML =
			`<span id="pass_email" title="電子郵箱格式不符">❌</span>`;
		// submit時改變顏色
		$("#inp_email").css("background-color", "pink");
		return false;
	}
}
// 檢查：電子郵箱格式-結束


// 檢查：手機格式-開始
function change_phone() {
	const inp_phone = document.getElementById("inp_phone").value;
	let ispass = true;

	// 密碼不得為空
	if (inp_phone == "") {
		ispass = false;
	}

	// 驗證
	if (ispass) {
		document.getElementById("pass_phone").outerHTML =
			`<span id="pass_phone">✔️</span>`;
		return true;
	} else {
		document.getElementById("pass_phone").outerHTML =
			`<span id="pass_phone" title="手機格式不符">❌</span>`;
		// submit時改變顏色
		$("#inp_phone").css("background-color", "pink");
		return false;
	}
}
// 檢查：手機格式-結束


// 檢查：生日格式-開始
function change_birth() {
	const inp_birth = document.getElementById("inp_birth").value;
	let ispass = true;

	// 密碼不得為空
	if (inp_birth == "") {
		ispass = false;
	}

	// 驗證
	if (ispass) {
		document.getElementById("pass_birth").outerHTML =
			`<span id="pass_birth">✔️</span>`;
		return true;
	} else {
		document.getElementById("pass_birth").outerHTML =
			`<span id="pass_birth" title="手機格式不符">❌</span>`;
		// submit時改變顏色
		$("#inp_birth").css("background-color", "pink");
		return false;
	}
}
// 檢查：生日格式-結束


// 清除內容
function bt_remove() {
	document.getElementById("inp_username").value = "";
	document.getElementById("inp_password").value = "";
	document.getElementById("inp_email").value = "";
	document.getElementById("inp_phone").value = "";
	document.getElementById("inp_birth").value = "";

};

// 察看結果
function bt_check() {

	for (let n = 1; n < userdatas.length; n++) {

		const userdata = userdatas[n];

		// 醜：padStart想不起來名稱
		// 醜：toString忘記加上()
		const index = n.toString().padStart(2, "0");


		document.getElementById(`reName_${index}`).innerText = userdata.username;
		document.getElementById(`rePass_${index}`).innerText = userdata.password;
		document.getElementById(`reMail_${index}`).innerText = userdata.email;
		document.getElementById(`rePhone_${index}`).innerText = userdata.phone;
		document.getElementById(`reBirth_${index}`).innerText = userdata.birth;
	}

};
