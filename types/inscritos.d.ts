import { Models } from "node-appwrite"

declare interface Inscrito extends Models.Document {
    NOME2: string
    //CODIGO: string
    $id: string
    "NUMERO INSCRITO": string
    EVENTO: string
    INSCRIÇÃO: string
    "TIPO MEMBRO": string
    ID: string
    NOME: string
    NASCIMENTO: string
    "TIPO SANGUINEO": string
    "PLANO SAUDE": string
    CPF: string
    EMAIL: string
    FONE: string
    EMERGENCIA: string
    "EMERGENCIA FONE": string
    ENDERECO: string
    NUMERO: string
    COMPLEMENTO: string
    BAIRRO: string
    CIDADE: string
    UF: string
    CEP: string
    "CAPITULO UF": string
    "CAPITULO NOME": string
    "CAPITULO NUMERO": string
    AUTORIDADES: string
    "OUTROS CARGOS": string
    CAMISETA: string
    "DATA INSCRICAO": string
    PAGAMENTO: string
    TIPO: string
    "VALOR ORIGEM": string
    "VALOR PAGO": string
    "1º LOTE"?: string
    "EXCLUIR E REEMBOLSAR"?: string
    PAGAMENTOS?: string
    "Aguardando pagamento"?: string
    ticketReceived: boolean
    presenca: boolean
    QUARTO: boolean
    [key: string]: any  // <- fallback para campos dinâmicos
  }
  