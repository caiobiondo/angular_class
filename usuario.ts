export interface Result {
    date: number;
    idRequest: number;
    responseCode: number;
    responseMsg: string;
    info: string;
    dataItemCount: number;
}

export interface ResultSingleItem extends Result {
    data: [{
        codUsuario: number;
        codEmpresarial: number;
    }];
}


export interface User {
    
    codUsuario?: number;
    codCliente: number;
    nomCliente: string;
    nomLingua: string;
    codColaborador: number;
    nomColaborador: string;
    codEmpresafilial: number;
    nomEmpresafilial: string;
    ancestralEmpresafilial: string;
    nomUsuario: string;
    desLogin: string;
    desSenha: string;
    desEmail: string;
    sitUsuario: string;
    tipVisualizacao: string;
    tipSuperusuario: string;
    codLingua: string;
    datTrocasenha: Date;
    datCadastro: Date;
    datUltimologin: Date;
    desUrlInicialBilling?: string;
    desUrlInicialFacilities?: string;
    desUrlInicialMdm?: string;
    desUrlInicialMonitor?: string;
    desUrlInicialServicedesk?: string;
    desUrlInicialTem?: string;
}

export interface Usuario extends User {
    data: [{
        
        
        codClient: number;
        codEmpresarial: number;
        nomUsuario: string;
        desLogin: string;
        desSenha: string;
        desEmail: string;
        sitUsuario: string;
        tipVisualizacao: string;
        tipSuperusuario: string;
        codLingua: string;

    }];





}







