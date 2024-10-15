import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getData, createData, updateData, deleteData } from '../utils/api';

export const useFetchData = <T>(key: string, url: string) => {
  return useQuery<T>(key, () => getData(url), {
    onError: (error: any) => {
      console.error('Fetch error:', error.message);
    },
  });
};

export const useCreateData = (url: string, key: string) => {
  const queryClient = useQueryClient();
  return useMutation((body: any) => createData(url, body), {
    onSuccess: () => {
      queryClient.invalidateQueries(key); 
    },
    onError: (error: any) => {
      console.error('Create error:', error.message);
    },
  });
};

export const useUpdateData = (url: string, key: string) => {
  const queryClient = useQueryClient();
  return useMutation((body: any) => updateData(url, body), {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
    onError: (error: any) => {
      console.error('Update error:', error.message);
    },
  });
};

export const useDeleteData = (url: string, key: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteData(url), {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
    onError: (error: any) => {
      console.error('Delete error:', error.message);
    },
  });
};
