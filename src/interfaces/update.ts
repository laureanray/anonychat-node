export class Update {
  date: string;
  connectedClients: number;

  constructor(connectedClients: number) {
    this.connectedClients = connectedClients;
  }
}