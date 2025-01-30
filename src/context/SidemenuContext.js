import React, { useState, useMemo } from "react";

export const SidemenuContext = React.createContext();

export const SidemenuProvider = ({ children }) => {
    const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);
    
    function toggleSidemenu() {
        setIsSidemenuOpen(!isSidemenuOpen);
    }
    
    function closeSidemenu() {
        setIsSidemenuOpen(false);
    }
    
    const value = useMemo(
        () => ({
            isSidemenuOpen,
            toggleSidemenu,
            closeSidemenu,
        }),
        [isSidemenuOpen]
    );
    
    return (
        <SidemenuContext.Provider value={value}>{children}</SidemenuContext.Provider>
    );
};