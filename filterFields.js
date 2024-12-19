/**
 * Filters fields from an object or array based on a list of allowed fields.
 * @param {Object|Array} data - The response object or array to filter.
 * @param {Array} fieldsToInclude - List of fields to include in the response.
 * @return {Object|Array} - Filtered response.
 */
function filterFields(data, fieldsToInclude) {
    if (Array.isArray(data)) {
        return data.map(item => filterFields(item, fieldsToInclude));
    }
    if (typeof data === 'object' && data !== null) {
        let filtered = {};
        fieldsToInclude.forEach(field => {
            if (data.hasOwnProperty(field)) {
                filtered[field] = data[field];
            }
        });
        return filtered;
    }
    return data; // Return unchanged if not an object or array
}

module.exports = filterFields;
