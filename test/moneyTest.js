import {formatCurrency} from '../scripts/utils/money.js'

if (formatCurrency(0) === '0.00'){
  console.log('passed');
} else {
  console.log('failed');
}