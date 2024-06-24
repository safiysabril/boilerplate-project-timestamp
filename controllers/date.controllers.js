const getDate = (req, res) => {
    const dateString = req.params.date;
    let date;

    if (!dateString) {
        // If no date parameter is provided, use the current date and time
        return date = new Date();
    } else {
        // Check if the dateString is a valid Unix timestamp in milliseconds
        const isUnixTimestamp = /^\d+$/.test(dateString);
        if (isUnixTimestamp) {
            date = new Date(parseInt(dateString));
        } else {
            date = validateDate(dateString);
        }
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
};

module.exports = { getDate };