import axios from 'axios';

export const GET = async () => {
  try {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
