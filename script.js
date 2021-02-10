'use construct';

$(function () {
	$('#tabs').tabs();
});

//西暦→年号
document.getElementById('submit1').addEventListener('click', () => {
	//入力された値を取得
	let inputYear = document.getElementById('year1').value;
	let inputMonth = document.getElementById('month1').value;
	let inputDay = document.getElementById('day1').value;

	//入力チェック
	const inputDate = new Date(inputYear, inputMonth - 1, inputDay);
	if (Number(inputMonth) !== Number(inputDate.getMonth() + 1)) {
		document.getElementById('result1').innerHTML = '正しい値を入力してください。';
		return false;
	}

	//ゼロ埋め
	//年
	if (inputYear.length < 4) {
		inputYear = zeroPadding(inputYear, 4);
	}
	//月
	if (inputMonth.length < 2) {
		inputMonth = zeroPadding(inputMonth, 2);
	}
	//日
	if (inputDay.length < 2) {
		inputDay = zeroPadding(inputDay, 2);
	}

	const input = inputYear + inputMonth + inputDay;
	if (20190501 <= input) {
		output('令和', 2018);
	} else if (19890107 <= input) {
		output('平成', 1988);
	} else if (19261225 <= input) {
		output('昭和', 1925);
	} else if (19120730 <= input) {
		output('大正', 1911);
	} else if (18680101 <= input) {
		output('明治', 1867);
	}



	//最終出力
	function output(nengo, minusYear) {
		let year = Number(input.substr(0, 4)) - minusYear;
		if (year === 1) {
			year = '元';
		}
		year = nengo + year + '年' + Number(inputMonth) + '月' + Number(inputDay) + '日';
		document.getElementById('result1').innerHTML = `<p><strong>西暦${inputYear}年${inputMonth}月${inputDay}日</strong>は</p><p><strong>${year}</strong>です。</p>`;
	}
})

//クリアボタン
document.getElementById('clear1').addEventListener('click', () => {
	document.getElementById('year1').value = '';
	document.getElementById('month1').value = '';
	document.getElementById('day1').value = '';
})

//年号→西暦
document.getElementById('submit2').addEventListener('click', () => {
	//入力内容の取得
	let inputNengo = document.getElementById('nengo').value;
	let inputYear = document.getElementById('year2').value;
	let inputMonth = document.getElementById('month2').value;
	let inputDay = document.getElementById('day2').value;

	//入力チェック
	const inputDate = new Date(inputYear, inputMonth - 1, inputDay);
	if (Number(inputMonth) !== Number(inputDate.getMonth() + 1)) {
		document.getElementById('result2').innerHTML = '正しい値を入力してください。';
		return false;
	}


	let out = '';
	switch(inputNengo){
		case '1':
			output('令和',2018);
			break;
		case '2':
			output('平成',1988);
			break;
		case '3':
			output('昭和',1925);
			break;
		case '4':
			output('大正',1911);
			break;
		case '5':
			output('明治',1867);
			break;
	}
	
	function output(nengo,addYear){
		let out = `<strong>${nengo}${inputYear}年${inputMonth}月${inputDay}日</strong>は<br><strong>西暦${Number(inputYear) + addYear}年${inputMonth}月${inputDay}日</strong>です。`
		document.getElementById('result2').innerHTML = `<p>${out}</p>`;
	}
})

//クリアボタン
document.getElementById('clear2').addEventListener('click', () => {
	document.getElementById('nengo').value = '1';
	document.getElementById('year2').value = '';
	document.getElementById('month2').value = '';
	document.getElementById('day2').value = '';
})

//ゼロ埋めfunction
function zeroPadding(input, length) {
	return (Array(length).join('0') + input).slice(-length);
}
