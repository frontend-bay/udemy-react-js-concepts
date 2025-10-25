import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import App from './App.jsx'
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      // 5️⃣ Main App
      <UserProvider>
          <App />
      </UserProvider>
  </StrictMode>,
)
