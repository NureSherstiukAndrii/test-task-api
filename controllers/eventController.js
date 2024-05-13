const eventService = require("../service/eventService");

class EventControllers {
  async getAllEvents(req, res, next){
    try {
      const { offset, limit } = req.query;
      const events = await eventService.getAllEvents(+offset, +limit);
      res.json(events);
    } catch (e) {
      next(e);
    }
  }

  async getEvent(req, res, next){
    try {
      const { eventId } = req.params;
      const event = await eventService.getEvent(eventId);
      res.json(event);
    } catch (e) {
      next(e);
    }
  }

  async addUserToEvent(req, res, next){
    try {
      const { fullName, email, birthDate, hearFrom, eventId } = req.body;
      res.json(await eventService.addUserToEvent(fullName, email, birthDate, hearFrom, eventId));
    } catch (e) {
      next(e);
    }
  }

  async getParticipants(req, res, next){
    try {
      const { eventId } = req.params;
      const participants = await eventService.getParticipants(eventId);
      res.json(participants);
    } catch (e) {
      next(e);
    }
  }
  async getRegistrations(req, res, next){
    try {
      const { eventId } = req.params;
      const registeredToday = await eventService.getRegistrations(eventId);
      res.json(registeredToday);
    } catch (e) {
      next(e);
    }
  }

}

module.exports = new EventControllers();
