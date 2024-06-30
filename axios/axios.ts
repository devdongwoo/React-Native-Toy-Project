import React, {useState} from 'react';

import axios from 'axios';
import {ItemData} from '../type/type';

let res: ItemData[] = [];
/**
 * @param queryKey에서 배열 두번째 원소는 number형
 * @return axios Promise 기반 data
 */
export const getUsers = async ({queryKey}: {queryKey: ['users', number]}) => {
  try {
    const {data} = await axios.get(
      `https://jsonplaceholder.typicode.com/users`,
    );

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
