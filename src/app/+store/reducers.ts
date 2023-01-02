import { createReducer, on } from "@ngrx/store";
import { IPages } from "../core/interfaces/pagesInterfaces";
import { changeToAbout, changeToBg, changeToEducation, changeToEn, changeToHome, changeToProjects } from "./actions";

export const currentLanguageReducer = createReducer<string>(
    'en',
    on(changeToBg , () => 'bg'),
    on(changeToEn , () => 'en')
)

export const currentPageReducer = createReducer<IPages>(
    {
        homeActive: true,
        projectsActive: false,
        aboutActive: false,
        educationActive: false
    },
    on(changeToHome , (state) => ({
        ...state,
        homeActive: true,
        aboutActive: false,
        projectsActive: false,
        educationActive: false
    })),
    on(changeToAbout , (state) => ({
        ...state,
        homeActive: false,
        aboutActive: true,
        projectsActive: false,
        educationActive: false
    })),
    on(changeToProjects , (state) => ({
        ...state,
        homeActive: false,
        aboutActive: false,
        projectsActive: true,
        educationActive: false
    })),
    on(changeToEducation , (state) => ({
        ...state,
        homeActive: false,
        aboutActive: false,
        projectsActive: false,
        educationActive: true
    }))
)