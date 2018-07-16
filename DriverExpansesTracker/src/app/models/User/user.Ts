// public string Id { get; set; }
// public string FirstName { get; set; }
// public string LastName { get; set; }
// public string UserName { get; set; }
// public decimal ToPay { get; set; }
// public decimal ToReceive { get; set; }
// public decimal Payed { get; set; }
// public decimal Received { get; set; }
export interface IUser {
  id: string;
  firsName: string;
  lastName: string;
  userName: string;
  toPay: number;
  oReceive: number;
  payed: number;
  received: number;
}
