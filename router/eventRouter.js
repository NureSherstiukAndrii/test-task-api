const { Router } = require("express");
const router = Router();

const eventController = require("../controllers/eventController");

router.get("/allEvents", eventController.getAllEvents)
  .get("/getEvent/:eventId", eventController.getEvent)
  .get("/getParticipants/:eventId", eventController.getParticipants)
  .get("/getRegistrations/:eventId", eventController.getRegistrations)
  .post("/addUserToEvent", eventController.addUserToEvent)

module.exports = router;