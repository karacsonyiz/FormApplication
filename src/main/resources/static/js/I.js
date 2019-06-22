$(document).ready(() => {
	initializeI2YearSelect();

	$('#i2_year').on('change', (event) => {
		let currentValue = $('.text-radio:visible').val();
		let year = $(event.target).val();
		currentValue.length === '0' ? $('.text-radio:visible').val(year) : $('.text-radio:visible').val(`${year}${currentValue.slice(2)}`);
		console.log($('.text-radio:visible').val());
	});

	$('#i2_month').on('change', (event) => {
		let currentValue = $('.text-radio:visible').val();
		let month = $(event.target).val();
		currentValue.length === '0' ? $('.text-radio:visible').val(month) : $('.text-radio:visible').val(`${currentValue.slice(0,2)}${month}`);
		console.log($('.text-radio:visible').val());
	});

	$('.text-radio').on('click', () => {
		$('.text-radio').siblings().prop('disabled', false);
	});

	$('.non-text-radio').on('click', () => {
		$('.text-radio').siblings().prop('selectedIndex', 0);
		$('.text-radio').siblings().prop('disabled', true);

	});
});

const initializeI2YearSelect = () => {
	let thisYear = Number(new Date().getFullYear());

	$($('#i2_year').children()[1]).val(thisYear.toString().slice(2)).html(thisYear);
	$($('#i2_year').children()[2]).val((thisYear - 1).toString().slice(2)).html(thisYear - 1);
};