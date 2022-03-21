export interface EligibleReport {
  elegível: boolean;
  economiaAnualDeCO2: number;
}

export interface IneligibleReport {
  elegível: boolean;
  razoesInelegibilidade: string[];
}
