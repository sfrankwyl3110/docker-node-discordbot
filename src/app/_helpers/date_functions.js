
function renameKeys(array, key_array) {
    const newArray = array.map(item => {
    const newItem = {...item};

    key_array.forEach((key) => {
        if (newItem.hasOwnProperty(key)) {
            newItem[key] = UTCDateToReadable(newItem[key]);
        }
    });

    return newItem;
});
return newArray;
}

const UTCDateToReadable = (date_input) => {

let date = new Date(date_input)

const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'UTC' // specify timezone if necessary
};

let formattedDate = date.toLocaleDateString('de-DE', options);
formattedDate = formattedDate.replace(/,/g, ''); // Remove commas

return formattedDate
}

module.exports = {
    renameKeys, UTCDateToReadable
}