export interface Schedule {
  startingDay: number;
  startingMonth: number;
  startingYear: number;
  endingDay: number;
  endingMonth: number;
  endingYear: number;
  reason: string;
}

export interface ScheduleResponse {
  success: boolean;
  schedules?: Schedule[] | Schedule;
  error?: string;
}
