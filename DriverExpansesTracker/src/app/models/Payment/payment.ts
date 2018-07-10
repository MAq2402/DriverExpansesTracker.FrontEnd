export interface IPayment {
  // public string PayerId { get; set; }
  // public string ReceiverId { get; set; }
  // public int JourneyId { get; set; }
  // public decimal Amount { get; set; }
  // public DateTime DateTime { get; set; }
  // public bool IsPayed { get; set; } = false;
  Payer: string;
  Receiver: string;
  Journey: string;
  Amount: number;
  DateTime: string;
  IsPayed: boolean;
}
