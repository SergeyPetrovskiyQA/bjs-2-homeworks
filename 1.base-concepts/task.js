"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return []; // нет корней
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    return [root]; // один корень
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2]; // два корня
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (
		typeof percent !== 'number' ||
		typeof contribution !== 'number' ||
		typeof amount !== 'number' ||
		typeof countMonths !== 'number'
	  ) {
		return false;
	  }
	
	  percent = percent / 100; // Преобразование процентной ставки в десятичное число
	  const monthlyRate = percent / 12; // Месячная процентная ставка
	  const creditAmount = amount - contribution; // Тело кредита
	
	  const monthlyPayment =
		creditAmount *
		(monthlyRate +
		  monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)); // Ежемесячный платеж
	
	  const totalPayment = monthlyPayment * countMonths; // Общая сумма, которую придется заплатить
	
	  return +totalPayment.toFixed(2); // Округление до двух знаков после запятой и возврат результата
	}