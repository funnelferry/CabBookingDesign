class BookingManager {
    constructor() {
      this.drivers = [];
    }
  
    bookRide() {
      // Logic to book a ride
      console.log("Ride booked.");
      this.notifyDrivers();
    }
  
    cancelRide() {
      // Logic to cancel a ride
      console.log("Ride cancelled.");
    }
  
    acceptRide() {
      // Logic to accept a ride
      console.log("Ride accepted.");
    }
  
    notifyDrivers() {
      // Logic to notify drivers
      
      console.log("Notifying drivers...");
    }
  }