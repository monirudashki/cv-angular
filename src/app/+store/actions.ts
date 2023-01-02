import { createAction } from "@ngrx/store";

const currentLanguageDomain = '[CurrentLanguage]';
export const changeToEn = createAction(`${currentLanguageDomain} changeToEn`);
export const changeToBg = createAction(`${currentLanguageDomain} changeToBg`);

const currentPageDomain = '[CurrentPage]';
export const changeToHome = createAction(`${currentPageDomain} changeToHome`);
export const changeToAbout = createAction(`${currentPageDomain} changeToAbout`);
export const changeToProjects = createAction(`${currentPageDomain} changeToProjects`);
export const changeToEducation = createAction(`${currentPageDomain} changeToEducation`);
