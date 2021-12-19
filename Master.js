let expenseList = [];

function submit() {
  let result = { title: "", amount: 0, id: 0 };
  const amountStr = document.getElementById("amount").value;
  const amount = parseFloat(amountStr);
  const plusMinus = document.getElementById("plus-minus").value;
  const title = document.getElementById("title").value;
  if (plusMinus == "-") {
    result.amount = amount * -1;
  } else {
    result.amount = amount * 1;
  }
  result.id = expenseList.length;
  result.title = title;
  expenseList.push(result);
  addRow(result.title, result.amount, result.id);
}

function addRow(title, amount, id) {
  let result;
  const tableBody = document.getElementById("expense-table-body").innerHTML;
  result = `\n          <tr>\n            <td>${amount}</td>\n            <td>${title}</td>\n            <td>${id}</td>\n          </tr>\n        `;
  document.getElementById("expense-table-body").innerHTML = tableBody + result;
  console.log(tableBody);
}

function renderTableRows(expenseList) {
  for (const row of expenseList) {
    addRow(row.title, row.amount, row.id);
  }
}
