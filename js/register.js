// JQ
$(document).ready(function () {
	// 開始時載入表格
	refresh();

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


	// 功能區：換頁
	$(".page input").val(pageNow);
	$(".page #pageprev").click(function () {
		if (pageNow > 1) {
			pageNow--;
			$(".page input").val(pageNow);
			refresh();
		}
	});
	$(".page #pagenext").click(function () {
		if (pageNow < pageMax) {
			pageNow++;
			$(".page input").val(pageNow);
			refresh();
		}
	});


	// 點選時拿到那行的ID
	// $(".table tr").click(function () {
	$(".table").on("click", "tr", function () {
		clicktr = $(this).attr("id");
		console.log("clicktr" + clicktr)
		let index = clicktr.slice(5);
		let serialno = parseInt(index) + 1;
		$("#userindex").replaceWith('<p id="userindex" style="text-align: center;">序號：' + serialno + '</p>');
		$("#bt_update").removeAttr("disabled");
		$("#bt_delete").removeAttr("disabled");

		// 取得表格內容
		let username = $("#data_" + index).find("#reName_" + index).text();
		let password = $("#data_" + index).find("#rePass_" + index).text();
		let mail = $("#data_" + index).find("#reMail_" + index).text();
		let phone = $("#data_" + index).find("#rePhone_" + index).text();
		let birth = $("#data_" + index).find("#reBirth_" + index).text();

		formInitial();
		// 表單填入資料
		$("#inp_username").val(username);
		$("#inp_password").val(password);
		$("#inp_email").val(mail);
		$("#inp_phone").val(phone);
		$("#inp_birth").val(birth);
	});




});




// JS方法
// import { userdatas } from "./userdatas.js";
// window.bt_submit = bt_submit;
// window.bt_remove = bt_remove;
// window.bt_update = bt_update;
// window.bt_delete = bt_delete;
// window.change_username = change_username;
// window.change_password = change_password;
// window.change_passwordAgain = change_passwordAgain;
// window.change_email = change_email;
// window.change_phone = change_phone;
// window.change_birth = change_birth;
const userdatas = [	// 醜：打的時候少加 =
	{ username: "帳號", password: "密碼", email: "郵箱", phone: "手機", birth: "生日" },
	{ username: "alice123", password: "passAlice2024", email: "alice@example.com", phone: "0912345678", birth: "1995-08-15" },
	{ username: "bob_the_dev", password: "bobDev@789", email: "bob.dev@gmail.com", phone: "0922333444", birth: "1990-03-22" },
	{ username: "charlie_88", password: "charliePass88!", email: "charlie88@mail.com", phone: "0933555666", birth: "1988-12-05" },
	{ username: "diana77", password: "dianaSecure77", email: "diana77@yahoo.com", phone: "0944111222", birth: "1992-06-30" },
	{ username: "eric_wang", password: "ericW2024!", email: "eric.wang@outlook.com", phone: "0955666777", birth: "1985-11-09" },
	{ username: "fiona_life", password: "F!onaPass999", email: "fiona.life@gmail.com", phone: "0966888999", birth: "1998-01-21" },
	{ username: "george_kuo", password: "geo123456", email: "georgek@domain.com", phone: "0977123456", birth: "1987-04-12" },
	{ username: "hannah88", password: "H@nnah88pass", email: "hannah88@mail.com", phone: "0988123123", birth: "1993-09-17" },
	{ username: "ivan_dev", password: "IvanDev@321", email: "ivan.dev@protonmail.com", phone: "0999000111", birth: "1991-07-03" },
	{ username: "jenny123", password: "JennyLove123", email: "jenny123@gmail.com", phone: "0911002233", birth: "1996-12-25" },
	{ username: "kevin.chen", password: "K3v!nChen777", email: "kevin.chen@company.com", phone: "0933004455", birth: "1989-05-18" },
	{ username: "end", password: "end", email: "end@gmail.com", phone: "0000000000", birth: "1945-01-11" },
];

// 按鈕：提交資料
function bt_submit() {
	const inp_username = document.getElementById("inp_username").value;
	const inp_password = document.getElementById("inp_password").value;
	const inp_passwordAgain = document.getElementById("inp_passwordAgain").value;
	const inp_email = document.getElementById("inp_email").value;
	const inp_phone = document.getElementById("inp_phone").value;
	const inp_birth = document.getElementById("inp_birth").value;


	// 拆分區塊與檢查
	const pushInput = {
		username: inp_username,
		password: inp_password,
		email: inp_email,
		phone: inp_phone,
		birth: inp_birth
	};


	// 資料驗證
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
		refresh();


		// 恢復初始值
		bt_remove();
	}







};


// 按鈕：清除內容
function bt_remove() {
	formInitial();
	clicktr = "";
	togglebutton();
	$("#userindex").replaceWith('<p id="userindex" style="padding-bottom: 24px;"></p>');
	document.getElementById("inp_username").value = "";
	document.getElementById("inp_password").value = "";
	document.getElementById("inp_passwordAgain").value = "";
	document.getElementById("inp_email").value = "";
	document.getElementById("inp_phone").value = "";
	document.getElementById("inp_birth").value = "";

};

let clicktr = "";
// 按鈕：修改資料
function bt_update() {
	if (clicktr == "") {
		return;
	}
	const inp_username = document.getElementById("inp_username").value;
	const inp_password = document.getElementById("inp_password").value;
	const inp_email = document.getElementById("inp_email").value;
	const inp_phone = document.getElementById("inp_phone").value;
	const inp_birth = document.getElementById("inp_birth").value;

	let index = clicktr.slice(5);

	// 帳號可與自己重複
	let usernamepass = false;
	let isblank = false;
	let isrepeat = false;
	if (inp_username != "") {
		for (let userdata of userdatas) {
			if (inp_username !== userdata.username) {
				usernamepass = true;
			} else {
				if (inp_username == $("#data_" + index).find("#reName_" + index).text()) {
					usernamepass = true;
				} else {
					isrepeat = true;
				}
			}
		}

	} else {
		isblank = true;
	}

	// 資料驗證
	console.log($("#data_" + index).find("#reName_" + index).text());
	if (usernamepass) {
		$("#inp_username").css("background-color", "white");
		document.getElementById("pass_username").outerHTML =
			`<span id="pass_username">✔️</span>`;
	} else {
		let text = ``;
		if (isblank) {
			text = `<span id="pass_username" title="帳號不得為空白">❌</span>`;
		}
		if (isrepeat) {
			text = `<span id="pass_username" title="帳號重複">❌</span>`;
		}
		document.getElementById("pass_username").outerHTML = text
		$("#inp_username").css("background-color", "pink");
	}
	change_password();
	change_passwordAgain();
	change_email();
	change_phone();
	change_birth();


	// 執行
	if (usernamepass && change_password() && change_passwordAgain() && change_email() && change_phone() && change_birth()) {
		alert("修改完成");
		// let value = $("#data_" + index).find("#reName_" + index).text();

		$("#data_" + index).find("#reName_" + index).text(inp_username);
		$("#data_" + index).find("#rePass_" + index).text(inp_password);
		$("#data_" + index).find("#reMail_" + index).text(inp_email);
		$("#data_" + index).find("#rePhone_" + index).text(inp_phone);
		$("#data_" + index).find("#reBirth_" + index).text(inp_birth);
	}

}


// 按鈕：刪除資料
function bt_delete() {
	if (clicktr === "") {
		return;
	}
	let index = parseInt(clicktr.slice(5)) + 1;
	userdatas.splice(index, 1)
	bt_remove();
	refresh();

}



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
		$("#inp_passwordAgain").css("background-color", "white");
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




// 察看結果
let pageNow = 1;
let pageShowCount = 10;
let pageMax = 1;
console.log(userdatas.length - 1)
console.log(pageShowCount)
console.log(Math.floor((userdatas.length - 1) / pageShowCount) + 1)
// let pageMax = 2;
function refresh() {
	togglebutton();
	// 清空內容重新繪製
	$("tbody").empty();

	// 換頁功能
	// 按鈕顯示與隱藏
	pageMax = Math.floor((userdatas.length - 2) / pageShowCount) + 1;
	if (pageMax == 1) {
		$("#pageprev").hide();
		$("#pagenext").hide();
	} else if (pageNow == 1) {
		$("#pageprev").hide();
		$("#pagenext").show();
	} else if (pageNow == pageMax) {
		$("#pageprev").show();
		$("#pagenext").hide();
	} else {
		$("#pageprev").show();
		$("#pagenext").show();
	}
	let pageIndexStart = 0;
	let pageIndexEnd = 0;


	pageIndexStart = (pageNow - 1) * pageShowCount + 1;
	pageIndexEnd = pageNow * pageShowCount + 1;
	console.log(pageIndexStart + " " + pageIndexEnd)
	for (let n = pageIndexStart; n < pageIndexEnd; n++) {

		// 填充空白維持表格大小
		if (n >= userdatas.length) {
			let appendData = `
			<tr>
				<td>&nbsp;</td>
				<td> </td>
				<td> </td>
				<td> </td>
				<td> </td>
			</tr>
			`;
			$(".table tbody").append(appendData);
			continue;
		}



		// 醜：padStart想不起來名稱
		// 醜：toString忘記加上()
		const index = (n - 1).toString().padStart(2, "0");

		const userdata = userdatas[n];
		let appendData = `
			<tr id="data_${index}">
				<td id="reName_${index}">${userdata.username}</td>
				<td id="rePass_${index}">${userdata.password}</td>
				<td id="reMail_${index}">${userdata.email}</td>
				<td id="rePhone_${index}">${userdata.phone}</td>
				<td id="reBirth_${index}">${userdata.birth}</td>
			</tr>
			`;
		$(".table tbody").append(appendData);

	}

	// $(".table").slideToggle(1000);

};


// 初始表單
function formInitial() {

	$("input").css("background-color", "white");


	$("#pass_username").html('<span id="pass_username" title="規則">ℹ️</span>');
	$("#pass_password").html('<span id="pass_password" title="大於8位">ℹ️</span>');
	$("#pass_passwordAgain").html('<span id="pass_passwordAgain"></span>');
	$("#pass_email").html('<span id="pass_email"></span>');
	$("#pass_phone").html('<span id="pass_phone"></span>');
	$("#pass_birth").html('<span id="pass_birth"></span>');
}


function togglebutton() {
	if (clicktr === "") {
		$("#bt_update").attr("disabled", "true")
		$("#bt_delete").attr("disabled", "true")
	}
}