export class QualidadeAr {
    indiceQualidadeAr: number;
    situacaoQualidadeAr: string;
    cidade: string;
    fonte: string;
    nomeInstituto: string;
    nomeInstitutoCompleto: string;
    dataUltimaAtualizacao: string;
    particulasAr: object;

    constructor() {
        this.indiceQualidadeAr = 23;
        this.cidade = 'Santana, São Paulo, Brazil';
        this.situacaoQualidadeAr = 'Boa';
        this.fonte = 'http://www.cetesb.sp.gov.br/';
        this.nomeInstituto = 'Divisionof Air Quality Data, Air Quality and Noise Management Bureau, Pollution Control Department';
        this.nomeInstitutoCompleto = 'Divisionof Air Quality Data, Air Quality and Noise Management Bureau, Pollution Control Department';
        this.dataUltimaAtualizacao = '2022-10-15 11:00:00';
        this.particulasAr = {
            "h": {
                "v": 83
            },
            "o3": {
                "v": 12.6
            },
            "p": {
                "v": 935.2
            },
            "pm25": {
                "v": 30
            },
            "t": {
                "v": 18.8
            },
            "w": {
                "v": 3
            },
            "wg": {
                "v": 11
            }
        }

    }
}
