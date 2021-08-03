import React from 'react'
import { DefaultLayout } from './layout/DefaultLayout'
import { Dashboard } from './pages/entry/dashboard/Dashboard.page'
import { Entry } from './pages/entry/Entry.page'
function App() {
  return (
    <div>
      {/* <Entry/>  */}
      <DefaultLayout>
        <Dashboard/>
      </DefaultLayout>
     
    </div>
  )
}

export default App
