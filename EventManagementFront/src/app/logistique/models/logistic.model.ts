export class Logistics {
  id: number;
  totalCost: number;
  commentaire: string;
  datelogistic: Date;
  event: Event;
  logisticDetails: LogisticDetails[];
}

export class Event {
  // Define properties of the Event class here
}

export class LogisticDetails {
  libele : string
  // Define properties of the LogisticDetails class here
}
