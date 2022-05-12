export const getReposRequest = params => ({
  type: 'API_REQUEST',
  payload: {
    page: params,
  },
});
