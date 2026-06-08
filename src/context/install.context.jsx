"use client";
import { Children, createContext, useState } from "react";

export const InstallAppsContext = createContext();
const InstalledAppsProvider = ({Children}) => {
    const [installedApps , setInstalledApps] = useState([]);

    const data = {
        installedApps,
        setInstalledApps,
    };

    return(
        <InstallAppsContext.Provider value ={data}>
            {Children}
        </InstallAppsContext.Provider>
    );
};
export default InstalledAppsProvider;