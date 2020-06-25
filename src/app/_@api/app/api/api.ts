export * from './auth.service';
import { AuthService } from './auth.service';
export * from './reminder.service';
import { ReminderService } from './reminder.service';
export const APIS = [AuthService, ReminderService];
