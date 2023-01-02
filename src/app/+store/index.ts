import { createSelector } from "@ngrx/store";
import { IPages } from "../core/interfaces/pagesInterfaces";

export interface IRootState {
    currentLanguage: string;
    currentPage: IPages;
}

export const selectFeature = (state: IRootState) => state.currentPage;

export const homeSelector = createSelector(selectFeature , (state) => state.homeActive)
