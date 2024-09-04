export interface FetchCustomersResponse {
    customers: Customer[]
  }
  
  export interface Customer {
    id: string
    first_name: string
    last_name: string
    address: string
    city: string
    state: string
    zipcode: string
    dogs: Dog[]
  }

  export interface CustomerData {
    first_name : string,
    last_name : string
  };

 
  export const emptyCustomer: Customer = {
    id: '',
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    dogs: []
  };

  export interface PostCustomerReq {
    first_name: string
    last_name: string
    address: string
    city: string
    state: string
    zipcode: string
  }

  export const newPostCustomerReq: PostCustomerReq = {    
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '', 
  };
  
  export interface PostScheduleWalkReq { 
    DogID : string,
    WalkerID?: number,
    ScheduledTime: Date,
    Duration: number,
    Address: string,
    Status: string,
    Notes: string
  }
  
  export interface Dog {
    id : string
    name: string
    breed: string
    age: number
    notes: string
  }

  export interface PostDog {
    name: string
    breed: string
    age: number
    notes: string
  }

  export interface Dogs {
    dogs: Dog[]
  }
  
  export interface DisplayWalkProps {
    customerId: string;
    walkId: string;
    dogId: string;
    dogName: string;
    walkerID: string;
    walkerName: string;
    scheduledTime: Date;
    duration: number;
    address: string;
    status: string;
    notes: string;
  }

  export interface CalendarWalk {
    id: number; 
    title: string; 
    date: string; 
    address: string; 
    walker: string, 
    duration: number; 
    notes: string | null;
  }