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
		
		inputYear = zeroErase(inputYear);
		inputMonth = zeroErase(inputMonth);
		inputDay = zeroErase(inputDay);
		
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
	if (inputYear === '元') {
		inputYear = '01';
	}


	//入力チェック
	const inputDate = new Date(inputYear, inputMonth - 1, inputDay);
	if (Number(inputMonth) !== Number(inputDate.getMonth() + 1)) {
		document.getElementById('result2').innerHTML = '正しい値を入力してください。';
		return false;
	}

	//ゼロ埋め
	//年
	if (inputYear.length < 2) {
		inputYear = zeroPadding(inputYear, 2);
	}
	//月
	if (inputMonth.length < 2) {
		inputMonth = zeroPadding(inputMonth, 2);
	}
	//日
	if (inputDay.length < 2) {
		inputDay = zeroPadding(inputDay, 2);
	}


	const jdgnum = Number(inputNengo + inputYear + inputMonth + inputDay);
	switch (inputNengo) {
		case '1':
			if (jdgnum < 1010501) {
				document.getElementById('result2').innerHTML = '令和は元年5月1日からです。';
				return false;
			}
			output('令和', 2018);
			break;
		case '2':
			if (jdgnum < 2010108 || 2310430 < jdgnum) {
				document.getElementById('result2').innerHTML = '平成は元年1月8日から31年4月30日までです。';
				return false;
			}
			output('平成', 1988);
			break;
		case '3':
			if (jdgnum < 3011225 || 3640107 < jdgnum) {
				document.getElementById('result2').innerHTML = '昭和は元年12月25日から64年1月7日までです。';
				return false;
			}
			output('昭和', 1925);
			break;
		case '4':
			if (jdgnum < 4010730 || 4151224 < jdgnum) {
				document.getElementById('result2').innerHTML = '大正は元年7月30日から15年12月24日までです。';
				return false;
			}
			output('大正', 1911);
			break;
		case '5':
			if (jdgnum < 5010101 || 5450729 < jdgnum) {
				document.getElementById('result2').innerHTML = '明治は元年1月1日から45年7月29日までです。';
				return false;
			}
			output('明治', 1867);
			break;
	}

	function output(nengo, addYear) {
		let out = '';
		inputYear = zeroErase(inputYear);
		inputMonth = zeroErase(inputMonth);
		inputDay = zeroErase(inputDay);
		if (inputYear === '1') {
			out = `<strong>${nengo}元年${inputMonth}月${inputDay}日</strong>は<br><strong>西暦${Number(inputYear) + addYear}年${inputMonth}月${inputDay}日</strong>です。`;
		} else {
			out = `<strong>${nengo}${inputYear}年${inputMonth}月${inputDay}日</strong>は<br><strong>西暦${Number(inputYear) + addYear}年${inputMonth}月${inputDay}日</strong>です。`;
		}
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

//ゼロ消しfunction
function zeroErase(input) {
	if (input.slice(0, 1) === '0') {
		return input.slice(1);
	}else{
		return input;
	}
}
