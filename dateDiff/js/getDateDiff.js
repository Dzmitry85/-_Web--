import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';
import { printError, printResult } from './printResult.js'

function getDateDiff(dateFrom, dateTo) {

  if (dateFrom < dateTo) {
    [dateFrom, dateTo] = [dateTo, dateFrom]
  }

  const dateFromObj = DateTime.fromISO(dateFrom);
  const dateToObj = DateTime.fromISO(dateTo);

  return dateFromObj.diff(dateToObj, ['years','months', 'days',]).toObject()
}
 const form = document.getElementById('datecalc');

form.onsubmit = (event) => {
  event.preventDefault();
  
  const dataForm = new FormData(event.target);

  const firstDate = dataForm.get('firstDate');
  const secondDate = dataForm.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Oooopps! Введите дату')
  } else {
    const dateREsult = getDateDiff(firstDate, secondDate);
    printResult(dateREsult);
  }
};



