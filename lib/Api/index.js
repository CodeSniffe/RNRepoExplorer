import axios from 'axios';

const endpoint = 'https://api.github.com/orgs/react-native-community/repos';

export const getReposRequest = async params => {
  return await axios.get(endpoint, {
    params: {
      page: params.page,
      per_page: 7,
    },
  });
};
