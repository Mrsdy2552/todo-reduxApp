export class Todo {
  public id: number;
  public texto: string;
  public competado: boolean;

  constructor(texto: string) {
    this.texto = texto;
    this.id = Math.random();
    this.competado = false;
  }
}
