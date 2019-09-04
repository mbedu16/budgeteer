class UI {
	constructor() {
		this.budgetFeedback = document.querySelector(".budget-feedback");
		this.expenseFeedback = document.querySelector(".expense-feedback");
		this.budgetForm = document.getElementById("budget-form");
		this.budgetInput = document.getElementById("budget-input");
		this.budgetAmount = document.getElementById("budget-amount");
		this.expenseAmount = document.getElementById("expense-amount");
		this.balance = document.getElementById("balance");
		this.balanceAmount = document.getElementById("balance-amount");
		this.expenseForm = document.getElementById("expense-form");
		this.expenseInput = document.getElementById("expense-input");
		this.amountInput = document.getElementById("amount-input");
		this.expenseList = document.getElementById("expense-list");
		this.itemList = [];
		this.itemID = 0;
	}
	// Submit budget method
	submitBudgetForm() {
		const budgetInputValue = this.budgetInput.value;
		if (budgetInputValue != "" && budgetInputValue > 0) {
			console.log(`Your budget for this month is ${budgetInputValue}`);
		} else {
			this.budgetFeedback.classList.add("showItem");
			this.budgetFeedback.innerHTML = "<p>Please enter a valid number...</p>";

			const self = this;

			setTimeout(function() {
				self.budgetFeedback.classList.remove("showItem");
			}, 4000);
		}
	}
}

function eventListeners() {
	// new instance of UI Class
	const ui = new UI();

	// Budget form submit
	ui.budgetForm.addEventListener("submit", function(event) {
		event.preventDefault();
		ui.submitBudgetForm();
	});

	// Expense form submit
	ui.expenseForm.addEventListener("submit", function(event) {
		event.preventDefault();
	});

	// Expense list click submit
	ui.expenseList.addEventListener("click", function() {});
}

document.addEventListener("DOMContentLoaded", function() {
	eventListeners();
});
