'use construct';

$(function(){
  $('#tabs').tabs();
});

document.getElementById('submit1').addEventListener('click', () => {
	//入力された値を取得
	let inputYear = document.getElementById('year1').value;
	let inputMonth = document.getElementById('month1').value;
	let inputDay = document.getElementById('day1').value;



	//入力チェック
	const inputDate = new Date(inputYear, inputMonth - 1, inputDay);
	console.log(Number(inputMonth));
	console.log(Number(inputDate.getMonth() + 1));
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
		output('令和',2018);
	} else if (19890107 <= input) {
		output('平成',1988);
	} else if (19261225 <= input) {
		output('昭和',1925);
	} else if (19120730 <= input) {
		output('大正',1911);
	} else if (18680101 <= input) {
		output('明治',1867);
	}


	//ゼロ埋めfunction
	function zeroPadding(input, length) {
		return (Array(length).join('0') + input).slice(-length);
	}

	//最終出力
	function output(nengo,minusYear){
		let year = Number(input.substr(0,4)) - minusYear;
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
