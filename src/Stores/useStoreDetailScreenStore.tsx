import {create} from 'zustand';

export type TstoreData = {
    storeIdx: number,
    storeName: string,
    storeAddress: string,
    contactNumber: string,
    expJournalsCount: number,
    ownExpSiteCount: number,
    representTag: {
      tagIdx: number,
      tagName: string,
    } | null,
    representJournal: {
      reviewIdx: Number,
      likeCount: Number,
      creator: {
        memberIdx: number,
        memberName: string,
      },
      reviewImage: [
        {
          fileName: string,
          fileSize: number,
          imageUrl: string,
        }
      ]
    } | null,
  }

const useStoreDetailScreenStore = create((set) => ({
  isUsed: false,
  setIsUsed: (data: boolean) => set((state: boolean) => ({
    isUsed: data
  })),
  storeData: {
    storeIdx: 0,
    storeName: "",
    storeAddress: "",
    contactNumber: "",
    expJournalsCount: 0,
    ownExpSiteCoun: 0,
    representTag: {
      tagIdx: 0,
      tagName: "",
    },
    representJournal: {
      reviewIdx: 0,
      likeCount: 0,
      creator: {
        memberIdx: 0,
        memberName: '',
        additionalProp3: {}
      },
      reviewImage: [
        {
          fileName: '',
          fileSize: 0,
          imageUrl: ''
        }
      ]
    }
  },
  setStoreData: (newData: TstoreData) => set((state: TstoreData) => ({
    ...state,
    storeData: newData
  }))
}));

export default useStoreDetailScreenStore;