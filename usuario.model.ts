export interface Result {
    date: number;
    idRequest: number;
    responseCode: number;
    responseMsg: string;
    info: string;
    dataItemCount: number;
}

export interface ResultListItem extends Result {
    data: [{
        codUsuario: number;
        nomUsuario: string;
        desLogin: string;
        desEmail: string;
        desSenha: string;
        codCliente: number;
        codLingua: string;
    }];
}

export interface Usuario extends Result {
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

export interface ResultItem extends Result {

    data: [{
        codCliente: number;
        codEmpresarial: number;
        nomUsuario: string;
        desLogin: string;
        desSenha: string;
        desEmail: string;
        sitUsario: string;
        tipVisualização: string;
        tipSuperusuario: string;
        codLingua: string;
    }];
}

export interface ResultItem_u extends Result {

    data: [{
        codUsuario: string;
        nomUsuario: string;
        desLogin: string;
        desEmail: string;
        codCliente: string;
        nomCliente: string;
        tipIntegracao: string;
        codLingua: string;
        nomLingua: string;
        codEmpresafilial: string;
        nomEmpresafilial: string;
        ancestralEmpresafilial: string;
    }];
}