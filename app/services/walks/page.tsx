"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import DisplayWalk from "@/app/components/DisplayWalk";
import { DisplayWalkProps } from "@/app/lib/definitions";
import useFetchWalks from '@/app/hooks/useFetchWalks';
import { getCustomerId } from '@/app/hooks/auth';
import { redirect } from 'next/navigation';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction"
import { CalendarWalk } from '@/app/lib/definitions';
import Modal from 'react-modal';
export default function Walks() {

  

  const [events, setEvents] = useState<CalendarWalk[]>([]);
  const { getPendingWalks } = useFetchWalks();
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const customerId: string | null = getCustomerId();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<DisplayWalkProps>();
  if (customerId == null) {
    //redirect('/customers');
    console.log("Redirecting to customers page");
    return;
  };
  

  const handleDateClick = (arg: any) => {
    alert(arg.dateStr)
  }

  const handleEventClick = (args: any) => {
    console.log(args.event.title + " " + args.event.start + " " + args.event.extendedProps.address);
    
    setSelectedEvent({
      dogName: args.event.title || "unknown",
      walkerName: args.event.extendedProps.walkerName || "No walker assigned",
      scheduledTime: args.event.start || new Date(),
      duration: args.event.extendedProps.duration || 30,
      address: args.event.extendedProps.address || "No address",
      notes: args.event.extendedProps.notes || "No notes",
      customerId: args.event.extendedProps.customerId || "", // Add missing properties
      walkId: args.event.extendedProps.walkId || "",
      dogId: args.event.extendedProps.dogId || "",
      walkerID: args.event.extendedProps.walkerID || "",
      status: args.event.extendedProps.status || ""
    });
    setModalIsOpen(true);
  
  }

  const fetchData = async () => {
    try {

      const response = await getPendingWalks(customerId);
      console.log(response);
      if(response.length > 0) { 
         const formattedEvents = response.map((walkProps: DisplayWalkProps) => ({
         title: `Walk - ${walkProps.dogName}`,
         date: new Date(walkProps.scheduledTime).toISOString(),
         address: walkProps.address,
         walkerName: walkProps.walkerName,
         duration: walkProps.duration,
         notes: walkProps.notes,
         customerId: walkProps.customerId,
         walkId: walkProps.walkId,
         dogId: walkProps.dogId,
         walkerID: walkProps.walkerID,
         status: walkProps.status

        }));
        setEvents(formattedEvents);
       
    }
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
    setIsMounted(true);
  }, []);
 if(!isMounted) { return null };
 console.log("mounted " + isMounted.toString());
  console.log("EVENTS:" + { events });

  return (
  
    <div>
      <h1 className="text-2xl font-bold">Pending Walks</h1>
      {loading ? (
        <div>Loading...</div>
      ) : events && events.length > 0 ? (
        
          <FullCalendar
            plugins={[dayGridPlugin , interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={events}
            // dateClick = {handleDateClick}
            eventClick={handleEventClick }
          />
        
      ) : (
        <div>No pending walks</div>
      )}
      {modalIsOpen && selectedEvent && (
        <div className='container  fixed inset-0 flex items-center justify-center  w-full'>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Example Modal"
          ariaHideApp={false}
          className='bg-white p-6 rounded-lg shadow-lg justify-center h-2/3 mx-56 my-36'       
          style={{ overlay: { zIndex: '999' } }}
        > 
          <div className='flex justify-center mt-24'>
          <DisplayWalk {...selectedEvent}  />
          </div>
          <div className='flex justify-end mr-48'>
          <button onClick={() => setModalIsOpen(false)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-self-end'>Close</button>
          </div>
        </Modal>
         </div>
      )}
    </div>
  
  );
}

// These are my cards
 // <div>
    //     <h1 className="text-2xl font-bold">Pending Walks</h1>
    //   {response && response.length > 0 ? (
    //   <ol>
    //     {response.map((walkProps, index) => (
    //       <li key={index}>
    //         <DisplayWalk {...walkProps} />
    //       </li>
    //     ))}
    //   </ol>
    //   ) : (<div>Loading...</div>)}  
    //   {!response && <span>No pending walks</span>}
    // </div>