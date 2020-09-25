// @desc Get all Transactions
// @route GET /api/vi/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
    res.send('Get Transactions');
}

// @desc Add Transaction
// @route POST /api/vi/transactions
// @access Public
exports.addTransactions = (req, res, next) => {
    res.send('POST Transaction');
}

// @desc Delete Transaction
// @route DELETE /api/vi/transactions/:id
// @access Public
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE Transactions');
}