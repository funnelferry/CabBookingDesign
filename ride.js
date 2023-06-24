class Ride {
  constructor(id, pickup, destination, distance, status, duration, rider, driver) {
    this.id = id;
    this.pickup = pickup;
    this.destination = destination;
    this.distance = distance;
    this.status = status;
    this.duration = duration;
    this.rider = rider;
    this.driver = driver;
  }

  start() {
    this.status = "ongoing";
    console.log("Ride started.");
  }

  complete() {
    this.status = "completed";
    console.log("Ride completed.");
  }

  cancel() {
    this.status = "cancelled";
    console.log("Ride cancelled.");
  }
}
