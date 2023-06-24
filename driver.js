class Driver {
    constructor(name, email, password, created, cab) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.created = created;
      this.cab = cab;
      this.currentRide = null;
      this.currentDestination = null;
      this.activeStatus = false;
      this.currentLocation = null;
    }
  
    acceptRide() {
      if (!this.activeStatus) {
        console.log("Please set your status to active first.");
        return;
      }
  
      if (this.currentRide === null) {
        this.currentRide = {
          destination: this.currentDestination,
          status: "ongoing"
        };
        console.log("Ride accepted to " + this.currentDestination);
      } else {
        console.log("You already have an ongoing ride.");
      }
    }
  
    cancelRide() {
      if (this.currentRide !== null) {
        this.currentRide = null;
        console.log("Ride cancelled.");
      } else {
        console.log("You don't have any ongoing rides to cancel.");
      }
    }
  
    static signUp() {
      console.log("Signed up as " + this.name + " with email " + this.email);
    }
  
    static login() {
      console.log("Logged in as " + this.name);
    }
  }
  