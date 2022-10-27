import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes-adicionais',
  templateUrl: './informacoes-adicionais.page.html',
  styleUrls: ['./informacoes-adicionais.page.scss'],
})
export class InformacoesAdicionaisPage implements OnInit {

  cardInformacacoes = [
    {
      titulo: 'CO',
      subtitulo: 'Monóxido de Carbono ',
      descricao: 'É um gás incolor e inodoro que resulta da queima incompleta de combustíveis de origem orgânica (combustíveis fósseis, biomassa etc.). Em geral é encontrado em maiores concentrações nas cidades, emitido principalmente por veículos automotores. Altas concentrações de CO são encontradas em áreas de intensa circulação de veículos'
    },
    {
      titulo: 'NOx',
      subtitulo: 'Óxidos de Nitrogênio',
      descricao: 'São formados durante processos de combustão. Em grandes cidades, os veículos geralmente são os principais responsáveis pela emissão dos óxidos de nitrogênio. O NO, sob a ação de luz solar se transforma em NO2 tem papel importante na formação de oxidantes fotoquímicos como o ozônio. Dependendo das concentrações, o NO2 causa prejuízos à saúde.'
    },
    {
      titulo: 'O3',
      subtitulo: 'Oxidantes Fotoquímicos, como o Ozônio',
      descricao: '“Oxidantes fotoquímicos” é a denominação que se dá à mistura de poluentes secundários formados por reações entre os óxidos de nitrogênio e compostos orgânicos voláteis, na presença de luz solar, sendo estes últimos liberados na queima incompleta e evaporação de combustíveis e solventes. O principal produto dessa reação é o ozônio, por isso mesmo utilizado como parâmetro indicador da presença de oxidantes fotoquímicos na atmosfera. Tais poluentes formam a chamada névoa fotoquímica ou “smog fotoquímico”, que possui esse nome porque causa na atmosfera diminuição da visibilidade.'
    },
    {
      titulo: 'MP',
      subtitulo: 'Material Particulado',
      descricao: 'Material Particulado (MP), Partículas Totais em Suspensão (PTS), Partículas Inaláveis (MP10), Partículas Inaláveis Finas (MP2,5) e Fumaça (FMC). Sob a denominação geral de Material Particulado se encontra um conjunto de poluentes constituídos de poeiras, fumaças e todo tipo de material sólido e líquido que se mantém suspenso na atmosfera por causa de seu pequeno tamanho. As principais fontes de emissão de particulado para a atmosfera são: veículos automotores, processos industriais, queima de biomassa, ressuspensão de poeira do solo, entre outros.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  toggleOcultarTexto(event: any) {
    let lerMaisElement: any = event.target;
    let descricaoCardElement: any = event.target.parentElement.children[0];
    descricaoCardElement.classList.toggle('ocultar-texto');
    lerMaisElement.textContent = descricaoCardElement.classList.contains('ocultar-texto') ? 'Exibir' : 'Ocultar';
  }

}
