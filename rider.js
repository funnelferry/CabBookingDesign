class Rider {
    constructor(name, created, email, password) {
      this.name = name;
      this.created = created;
      this.email = email;
      this.password = password;
      this.currentRide = null;
      this.currentLocation = null;
      this.prevRides = [];
    }
  
    requestRide(destination) {
      if (this.currentRide === null) {
        this.currentRide = {
          destination: destination,
          status: "pending"
        };
        console.log("Ride requested to " + destination);
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
  