export const regexCheckEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export function formatPhoneNumber(phoneNumber: string): string {
  let cleaned = ("" + phoneNumber).replace(/\D/g, "");
  let match = cleaned.match(/^([1-9]|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    let intlCode = match[1] ? "+" + match[1] + " " : "";

    return [intlCode, "", `(${match[2]}) `, " ", match[3], "-", match[4]].join(
      ""
    );
  }
  return phoneNumber;
}

export function formatValueInputMask(phoneNumber: string): string {
  let regex = /( |-|_)/g;
  return phoneNumber.replace(regex, "");
}

export type Filter = {
  name: string;
  value: string | number;
};

export function filterData(
  arrayData: never[],
  page: number,
  pageSize: number,
  searchParam: Filter[] | null,
  columnName?: string | null,
  sortType?: string | null,
  search?: {
    column: string;
    value: string;
  } | null
) {
  let dataFilter: never[] = [];

  let dataResponse = {
    pageCount: 0,
    records: []
  };

  // search key
  if (search) {
    arrayData.forEach(data => {
      if (data[search.column] === search.value) {
        dataFilter.push(data);
      }
    });
  } else {
    dataFilter = arrayData;
  }

  // sort column
  if (columnName && sortType) {
    dataFilter.sort(dynamicSort(columnName, sortType));
  }

  // filter
  if (searchParam) {
    searchParam.forEach(param => {
      dataFilter = dataFilter.filter(data => {
        return data[param.name] === param.value;
      });
    });
  }

  // set page count
  dataResponse.pageCount = Math.ceil(dataFilter.length / pageSize);

  // push records
  for (let i = 0; i < dataFilter.length; i++) {
    if (i >= (page - 1) * pageSize && i < page * pageSize) {
      dataResponse.records.push(dataFilter[i]);
    }
  }

  return dataResponse;
}

function dynamicSort(columnName: string, sortType: string) {
  var sortOrder = 1;
  if (sortType === "DESC") {
    sortOrder = -1;
  }
  return function(a: any, b: any) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    let result = 0;
    if (columnName.match("[Dd]ate")) {
      result =
        new Date(a[columnName]) < new Date(b[columnName])
          ? -1
          : new Date(a[columnName]) > new Date(b[columnName])
          ? 1
          : 0;
    } else {
      result =
        a[columnName] < b[columnName]
          ? -1
          : a[columnName] > b[columnName]
          ? 1
          : 0;
    }
    return result * sortOrder;
  };
}
