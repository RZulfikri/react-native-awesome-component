export const ORDER_TYPE = {
  DESC: 'desc',
  ASC: 'asc',
}

export function compareValues(
  key,
  order = ORDER_TYPE.ASC,
  isDate = false,
  isTimeToken = false,
) {
  return (a, b) => {
    let varA;
    let varB;
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      const splitKey = key.split('.');
      if (splitKey.length > 1) {
        varA = a;
        varB = b;

        for (let i = 0; i < splitKey.length; i += 1) {
          varA = varA[splitKey[i]];
          varB = varB[splitKey[i]];
        }
      } else {
        return 0;
      }
    } else {
      varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      if (isDate) {
        varA = new Date(isTimeToken ? varA / 1e4 : varA);
        varB = new Date(isTimeToken ? varB / 1e4 : varB);
      }
    }

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === ORDER_TYPE.DESC ? comparison * -1 : comparison;
  };
}

export function mergeAndReplace(
  oldArray = [],
  newArray,
  key = 'id',
  sortId,
  sortOrder,
  isDate = false,
) {
  const mergeArray = [...oldArray];
  newArray.forEach(newItem => {
    const index = mergeArray.findIndex(
      oldItem => oldItem[key] === newItem[key],
    );
    if (index >= 0) {
      mergeArray.splice(index, 1, newItem);
    } else {
      if (sortId) {
        if (mergeArray.length > 1) {
          if (
            mergeArray[0][sortId] < mergeArray[mergeArray.length - 1][sortId]
          ) {
            if (newItem[sortId] < mergeArray[0][sortId]) {
              mergeArray.unshift(newItem);
            } else {
              mergeArray.push(newItem);
            }
          } else {
            if (newItem[sortId] < mergeArray[0][sortId]) {
              mergeArray.push(newItem);
            } else {
              mergeArray.unshift(newItem);
            }
          }
        } else {
          mergeArray.push(newItem);
        }
      } else {
        if (mergeArray.length > 1) {
          if (mergeArray[0][key] < mergeArray[mergeArray.length - 1][key]) {
            if (newItem[key] < mergeArray[0][key]) {
              mergeArray.unshift(newItem);
            } else {
              mergeArray.push(newItem);
            }
          } else {
            if (newItem[key] < mergeArray[0][key]) {
              mergeArray.push(newItem);
            } else {
              mergeArray.unshift(newItem);
            }
          }
        } else {
          mergeArray.push(newItem);
        }
      }
    }
  });
  if (sortOrder && sortId) {
    mergeArray.sort(compareValues(sortId, sortOrder, isDate));
  }
  return mergeArray;
}