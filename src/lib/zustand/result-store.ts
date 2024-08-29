import { ResponseType as Response } from '@/api/search';
import { create } from 'zustand';

interface ResultStore {
  results: Response | undefined;
  addResults: (result: Response) => void;
  clearResults: () => void;
}

const useResultStore = create<ResultStore>((set) => ({
  results: undefined,
  addResults: (newResults: Response) => set({ results: newResults }),
  clearResults: () => set({ results: undefined }),
}));

export default useResultStore;
