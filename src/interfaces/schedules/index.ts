export interface IScheduleRequest {
  userId?: string;
  propertyId: string;
  date: string;
  hour: string;
}

export interface IScheduleResponse extends IScheduleRequest {
  id: string;
}
