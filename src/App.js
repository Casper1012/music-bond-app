import React from 'react';
import Layout from './components/Layout';
import { SidebarProvider } from './context/SidebarContext';
  
function App() {
  return (
    <div>
      <SidebarProvider>
        <Layout />
      </SidebarProvider>
    </div>    
  );
}

export default App;
