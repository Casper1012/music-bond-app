import React from 'react';
import Layout from './components/Layout';
import { SidebarProvider } from './context/SidebarContext';
import { SidemenuProvider } from './context/SidemenuContext';
  
function App() {
  return (
    <div>
      <SidemenuProvider>
        <SidebarProvider>
          <Layout />
        </SidebarProvider>
      </SidemenuProvider>
    </div>    
  );
}

export default App;
