const getDate = (req, res) => {
    const dateString = req.params.date;

    // Check if the dateString is a valid Unix timestamp in milliseconds
    const isUnixTimestamp = /^\d+$/.test(dateString);
    let date;

    if (isUnixTimestamp) {
        date = new Date(parseInt(dateString));
    } else {
        date = validateDate(dateString);
    }

    if (date) {
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    } else {
        res.status(400).json({ "error": 'Invalid date' });
    }
};

function validateDate(dateString) {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
}

module.exports = { getDate };