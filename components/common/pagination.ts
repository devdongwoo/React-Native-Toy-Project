import {ItemData} from '../../type/type';

const pagination = (
  database: ItemData[],
  curPage: number,
  pageSize: number,
) => {
  const startIdx = (curPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;

  if (startIdx > database.length) {
    return [];
  }

  return database.slice(startIdx, endIdx);
};

export default pagination;
