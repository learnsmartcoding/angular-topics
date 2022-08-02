export interface Appointment {
    name: string;
    description: string;
    timeSlot: number; //in 24 hours format
    duration: number; // hours representation
}