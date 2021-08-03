import React from 'react'
import { DefaultLayout } from './layout/DefaultLayout'
import { Dashboard } from './pages/entry/dashboard/Dashboard.page'
import { Entry } from './pages/entry/Entry.page'
import { AddTicket } from './pages/entry/new-ticket/AddTicket.page'
import { Ticketlist } from './pages/ticket-listing/Ticketlist.page'
import { Ticket } from './pages/tickket/Ticket.page'
function App() {
  return (
    <div>
      <Entry/> 
      <DefaultLayout>
        <Dashboard/>
        <AddTicket/>
        <Ticketlist/>
        <Ticket/>
      </DefaultLayout> 
      
     
    </div>
  )
}

export default App
