import IProjeto from "../interfaces/IProjeto";

export interface ITarefa {
  duracaoEmSegundos: number;
  descricao: string;
  projeto: IProjeto;
}
