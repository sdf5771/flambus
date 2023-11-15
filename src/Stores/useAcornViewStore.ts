import {create} from 'zustand';

const useAcornViewStore = create((set) => ({
    isOpen: false,
    setIsOpen: (data: boolean) => set((state: boolean) => ({
        isOpen: data,
    }))
}))

export default useAcornViewStore;