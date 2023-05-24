import { Request, Response } from "express";
import Schedule from "./models";

const getSchedules = async (req: Request, res: Response) => {
  try {
    const schedules = await Schedule.find();
  
    res.status(200).json({
      status: 'success',
      data: {
        schedules
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

const addSchedule = async (req: Request, res: Response) => {
  try {
    const schedule = await Schedule.create(req.body);
  
    res.status(201).json({
      status: 'success',
      data: {
        schedule
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

const addRaid = async (req: Request, res: Response) => {
  try {
    const schedule = await Schedule.updateOne({ _id: req.params.id }, {
      $push: {
        "raid": req.body
      }
    });
  
    res.status(200).json({
      status: 'success',
      data: {
        schedule
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

const updateSchedule = async (req: Request, res: Response) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
  
    res.status(200).json({
      status: 'success',
      data: {
        schedule
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

const deleteSchedule = async (req: Request, res: Response) => {
  try {
    const { id, raidId } = req.params;
    const schedule = await Schedule.findById(id);

    if (!schedule) res.status(404).json({ error: 'Schedule not found' });

    const raidIndex = schedule!.raid.findIndex(raid => raid._id!.toString() === raidId);

    if (raidIndex === -1) res.status(404).json({ error: 'Raid not found' });

    schedule!.raid.splice(raidIndex, 1);
    await schedule!.save();

    res.status(200).json({
      status: 'success',
      message: 'null'
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

const addCrew = async (req: Request, res: Response) => {
  try {
    const { id, raidId } = req.params;
    const schedule = await Schedule.findById(id);

    if (!schedule) res.status(404).json({ error: 'Schedule not found' });

    const raidIndex = schedule!.raid.findIndex(raid => raid._id!.toString() === raidId);

    if (raidIndex === -1) res.status(404).json({ error: 'Raid not found' });

    schedule!.raid[raidIndex].characterList.push(req.body);
    await schedule!.save();

    res.status(200).json({
      status: 'success',
      message: 'null'
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

const deleteCrew = async (req: Request, res: Response) => {
  try {
    const { id, raidId, crewId } = req.params;
    const schedule = await Schedule.findById(id);

    if (!schedule) res.status(404).json({ error: 'Schedule not found' });

    const raid = schedule!.raid.find(raid => raid._id!.toString() === raidId);
    const crewIndex = raid!.characterList.findIndex(character => character._id!.toString() === crewId);

    raid?.characterList.splice(crewIndex, 1);
    await schedule!.save();

    res.status(200).json({
      status: 'success',
      message: 'null'
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

export { getSchedules, addSchedule, addRaid, updateSchedule, deleteSchedule, addCrew, deleteCrew };