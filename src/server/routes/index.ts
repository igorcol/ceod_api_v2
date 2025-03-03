import { Router } from "express";
import { jsonController, MiscController, UserController } from "../controllers";

export const router = Router();

router.get('/users', UserController.getAll)
router.get('/users/emails', UserController.getEmails)
router.get('/users/:id', UserController.getById)

router.patch('/users/:id', UserController.updatePresence)

router.post('/export-json', jsonController.exportJson)
router.delete('/drop-json', jsonController.dropJsonDb)

router.get('/health', MiscController.checkHealth)