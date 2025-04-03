import cardBase from '../assets/planilha-base/card.png';
import formAcompanhamento from '../assets/planilha-base/form-acompanhamento.png';

import dataSessao from '../assets/planilha-previsoes/data-sessao.png';
import dataSessaoAlterada from '../assets/planilha-previsoes/data-sessao-alterada.png';
import controleSessao from '../assets/planilha-previsoes/controle-sessao.png';
import controleSessaoAlterado from '../assets/planilha-previsoes/controle-sessao-alterado.png';
import controleSessaoConcluido from '../assets/planilha-previsoes/controle-sessao-concluido.png';
import filtroDataVazia from '../assets/planilha-previsoes/filtro-data-vazia.png';
import filtroStatusConcluido from '../assets/planilha-previsoes/filtro-status-concluido.png';
import filtroDepartamento from '../assets/planilha-previsoes/filtro-departamento.png';
import datasControleSessoes from '../assets/planilha-previsoes/datas-controle-sessoes.png';
import cardPrevisoes from '../assets/planilha-previsoes/card.png';

import marcarSessao from '../assets/planilha-pendente/marcar-sessao.png';
import marcarDataSessao from '../assets/planilha-pendente/marcar-data-sessao.png';
import alterarDataSessao from '../assets/planilha-pendente/alterar-data-sessao.png';
import concluirSessao from '../assets/planilha-pendente/concluir-sessao.png';
import cardPendente from '../assets/planilha-pendente/card.png';

import cardConcluidas from '../assets/planilha-concluidas/card.png';
import cardSensibilizacao from '../assets/planilha-sensibilizacao/card.png';
import cardProximas from '../assets/planilha-proximas/card.png';
import cardVencidas from '../assets/planilha-vencidas/card.png';

import cardAfastado from '../assets/planilha-afastado/card.png';
import colunasAfastado from '../assets/planilha-afastado/colunas.png';
import colunasConcluidoAfastado from '../assets/planilha-afastado/colunas-concluido.png';

export const instructions = [
  // PLANILHA BASE
  {
    title: 'Planilha Base',
    steps: [
      {
        subtitle: 'Para que serve?',
        list: false,
        text: ['A planilha base é a fornecedora dos dados usados em outras planilhas, é dela que são extraídas as informações iniciais que são tratadas posteriormente.'],
        icon: 'fa-solid fa-circle-info',
        images: false
      },
      {
        subtitle: 'O que acontece se atualizar a planilha base?',
        text: [
          'A atualização da planilha base provoca um "reset" nas informações de todas as outras planilhas.',
          'Faça essa atualização somente quando quiser apagar todo o progresso de acompanhamento realizado.'
        ],
        list: false,
        icon: 'fa-solid fa-triangle-exclamation',
        images: false
      },
      {
        subtitle: 'Como atualizar a planilha base?',
        text: ['Para atualizar a sua planilha base você deve executar os seguintes passos:'],
        list: [
          'Na aba "Macro" da planilha você deve clicar no primeiro card disponível: "ATUALIZAR BASE".',
          'Após isso abrirá uma janela solicitando a planilha base.',
          'Então é só clicar no ícone de pasta ao lado do campo de texto que abrirá uma janela de arquivos para que seja selecionado a planilha.',
          'Feito isso, basta executar e a sua nova planilha base estará atualizada, assim como todas as outras planilhas.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [cardBase, formAcompanhamento]
      },
    ]
  },
  // PLANILHA PREVISÕES 
  {
    title: 'Planilha Previsões',
    steps: [
      {
        subtitle: 'Para que serve?',
        text: [
          'A planilha de previsões é o coração desta automação.',
          'Nela é possível visualizar, controlar e analisar as sessões de acompanhamento.'
        ],
        list: false,
        icon: 'fa-solid fa-circle-info',
        images: false
      },
      {
        subtitle: 'Como atualizar a planilha previsões?',
        text: [
          'Para atualizar a planilha de previsões você deve executar os seguintes passos:',
        ],
        list: [
          'Navegue até a aba "MACRO" da planilha',
          'Clique no segundo card disponível: "ATUALIZAR PREVISÕES"',
          'Feito isso, a planilha de previsões já estará atualizada, conforme a sua planilha base'
        ],
        icon: 'fa-solid fa-circle-info',
        images: [cardPrevisoes]
      },
      {
        subtitle: 'Como agendar uma sessão?',
        text: [
          'Para agendar uma sessão de acompanhamento, é necessário apenas inserir a data da primeira sessão e as demais datas serão inseridas dinâmicamente.',
        ],
        list: [
          'Para começar, entre na planilha "PREVISÕES".',
          'Em seguida, navegue até a linha do colaborador que deseja agendar a sessão.',
          'Escolhido o colaborador, a única coisa a se fazer é digitar a data da primeira sessão na coluna F.',
          'Feito isso, todas as outras sessões já terão datas preenchidas.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [dataSessao]
      },
      {
        subtitle: 'Como alterar a data de uma sessão?',
        text: [
          'Na planilha "PREVISÕES" você pode alterar a data das primeiras sessões.',
          'Para alterar as datas das demais sessões continue descendo este passo a passo até encontrar a planilha de "PENDENCIAS".',
          'Segue abaixo o passo a passo de como alterar a data de uma primeira sessão.'
        ],
        list: [
          'Para começar, entre na planilha "PREVISÕES".',
          'Em seguida, navegue até a linha do colaborador que deseja alterar a data da sessão.',
          'Escolhido o colaborador, a única coisa a se fazer é digitar a nova data no lugar da data antiga.',
          'Feito isso, a data da primeira sessão estará alterada e as demais sessões serão atualizadas conforme a nova data.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [dataSessao, dataSessaoAlterada]
      },
      {
        subtitle: 'Como controlar o status das sessões?',
        text: [
          'Na planilha "PREVISÕES" você pode controlar o status das primeiras sessões.',
          'Para controlar o status das demais sessões continue descendo este passo a passo até encontrar a planilha de "PENDENCIAS".',
          'Segue abaixo o passo a passo de como alterar o status de uma primeira sessão.'
        ],
        list: [
          'Para começar, entre na planilha "PREVISÕES".',
          'Em seguida, navegue até a linha do colaborador que deseja alterar a data da sessão.',
          'Escolhido o colaborador, a única coisa a se fazer é selecionar qual status você deseja para a sessão, conforme print abaixo.',
          'Feito isso, o status da primeira sessão estará alterado e as demais sessões serão atualizadas conforme novo status.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [controleSessao, controleSessaoAlterado, controleSessaoConcluido]
      },
      {
        subtitle: 'Visualização de informações',
        text: [
          'Na planilha "PREVISÕES" é o local onde está concentrado todo o controle das sessões.',
          'Nela é possível visualizar as datas e os status de cada uma das sessões.',
          'Além disso, os filtros permitem realizar diversas análies, como:',
        ],
        list: [
          'Quantidade de colaboradores que estão sem os acompanhamentos agendados.',
          'Quantidade de colaboradores que concluíram determinada sessão de acompanhamento.',
          'Quantidade de colaboradores por departamento que realizaram, ou não, algum acompanhamento',
          'Quantidade de colaboradores por departamento, ou não, que estão com o acompanhamento em determinado status. Ex: "PENDENTE"'
        ],
        icon: 'fa-solid fa-circle-info',
        images: [datasControleSessoes, filtroDataVazia, filtroStatusConcluido, filtroDepartamento]
      }
    ]
  },
  // PLANILHA PENDENTE
  {
    title: 'Planilha Pendente',
    steps: [
      {
        subtitle: 'Para que serve?',
        text: [
          'A planilha "PENDENTE" traz com detalhes todas as sessões que estão em status "pendente" na planilha de previsões.',
          'Além disso, ela permite marcar, caso a pendência seja na primeira sessão, ou alterar a data dos acompanhamentos.',
          'Ainda é possível, caso necessário, alterar o status para "afastado" para colaboradores que estão em afastamento',
        ],
        list: false,
        icon: 'fa-solid fa-circle-info',
        images: false
      },
      {
        subtitle: 'Como atualizar a planilha pendente?',
        text: [
          'Para atualizar a planilha de pendências você deve executar os seguintes passos:',
        ],
        list: [
          'Navegue até a aba "MACRO" da planilha',
          'Clique no terceiro card disponível: "ATUALIZAR PENDENTES"',
          'Feito isso, a planilha de pendências já estará atualizada, conforme a sua planilha de previsões'
        ],
        icon: 'fa-solid fa-circle-info',
        images: [cardPendente]
      },
      {
        subtitle: 'Como marcar uma sessão?',
        text: [
          'Na planilha "PENDENTE" nas colunas de I a K estarão as ações disponíveis para cada colaborador, de acordo com a sua sessão',
          'Caso a opção "MARCAR" esteja habilitada, quer dizer que a primeira sessão de acompanhamento do respectivo colaborador ainda não foi marcada.',
          'Siga as instruções abaixo para marcar uma sessão através da planilha de pendências.'
        ],
        list: [
          'Para começar, entre na planilha "PENDENTE".',
          'Em seguida, navegue até a linha do colaborador que deseja marcar a data da sessão.',
          'Escolhido o colaborador, clique com o botão direito sobre a palavra "MARCAR".',
          'Feito isso, irá abrir uma janela requisitando a data para o acompanhamento, conforme imagem abaixo.',
          'Em seguida, basta inserir a data no campo, no seguinte formato (dd/mm/aaaa) e executar.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [marcarDataSessao, marcarSessao]
      },
      {
        subtitle: 'Como alterar a data de uma sessão?',
        text: [
          'Na planilha "PENDENTE" nas colunas de I a K estarão as ações disponíveis para cada colaborador, de acordo com a sua sessão.',
          'Caso a opção "ALTERAR" esteja habilitada, quer dizer que a primeira sessão de acompanhamento do respectivo colaborador já foi concluída e você pode alterar a data da sessão que está pendente no momento.',
          'Siga as instruções abaixo para alterar uma sessão através da planilha de pendências.'
        ],
        list: [
          'Para começar, entre na planilha "PENDENTE".',
          'Em seguida, navegue até a linha do colaborador que deseja alterar a data da sessão.',
          'Escolhido o colaborador, clique com o botão direito sobre a palavra "ALTERAR".',
          'Feito isso, irá abrir uma janela requisitando a nova data para o acompanhamento, conforme imagem abaixo.',
          'Em seguida, basta inserir a data no campo, no seguinte formato (dd/mm/aaaa) e executar.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [alterarDataSessao, marcarSessao]
      },
      {
        subtitle: 'Como concluir uma sessão?',
        text: [
          'Na planilha "PENDENTE" nas colunas de I a K estarão as ações disponíveis para cada colaborador, de acordo com a sua sessão.',
          'Caso a opção "CONCLUIR" esteja habilitada, quer dizer que a primeira sessão de acompanhamento do respectivo colaborador já foi concluída e você pode concluir a sessão que está pendente no momento.',
          'Siga as instruções abaixo para concluir uma sessão através da planilha de pendências.'
        ],
        list: [
          'Para começar, entre na planilha "PENDENTE".',
          'Em seguida, navegue até a linha do colaborador que deseja alterar a data da sessão.',
          'Escolhido o colaborador, clique com o botão direito sobre a palavra "CONCLUIR".',
          'Feito isso, irá abrir uma janela de confirmação, caso realmente queira concluir a sessão clique em "Sim".',
          'Após isso, o status da sessão de acompanhamento será alterado para concluído e a próxima sessão ficará pendente.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [alterarDataSessao, concluirSessao]
      },
      {
        subtitle: 'Como concluir uma sessão?',
        text: [
          'Na planilha "PENDENTE" nas colunas de I a K estarão as ações disponíveis para cada colaborador, de acordo com a sua sessão.',
          'Caso a opção "CONCLUIR" esteja habilitada, quer dizer que a primeira sessão de acompanhamento do respectivo colaborador já foi concluída e você pode concluir a sessão que está pendente no momento.',
          'Siga as instruções abaixo para concluir uma sessão através da planilha de pendências.'
        ],
        list: [
          'Para começar, entre na planilha "PENDENTE".',
          'Em seguida, navegue até a linha do colaborador que deseja alterar a data da sessão.',
          'Escolhido o colaborador, clique com o botão direito sobre a palavra "CONCLUIR".',
          'Feito isso, irá abrir uma janela de confirmação, caso realmente queira concluir a sessão clique em "Sim".',
          'Após isso, o status da sessão de acompanhamento será alterado para concluído e a próxima sessão ficará pendente.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [alterarDataSessao, concluirSessao]
      },
      {
        subtitle: 'Visualização de informações',
        text: [
          'Na planilha "PENDENTE" é o local onde está concentrado todas as informações dos acompanhamentos pendentes.',
          'Ela traz somente a sessão na qual o colaborador precisa realizar atualmente.',
          'Ex: o colaborador realizou a primeira sessão e está pendente a segunda. Portanto, essa planilha trará a informação de que a segunda sessão está pendente. Ao concluir o acompanhamento a terceira sessão será mostrada na planilha.',
          'Nela também é possível realizar diversas análises, como:',
        ],
        list: [
          'Quantidade de colaboradores que estão com acompanhamentos pendentes.',
          'Quantidade de colaboradores que estão pendentes em determinada sessão de acompanhamento.',
          'Quantidade de colaboradores por departamento ou equipe que estão com sessões pendentes.',
          'Quantidade de colaboradores por departamento ou equipe que estão com determinada sessão pendente.'
        ],
        icon: 'fa-solid fa-circle-info',
        images: false
      }
    ]
  },

  // PLANILHA CONCLUÍDAS
  {
    title: 'Planilha Concluídas',
    steps: [
      {
        subtitle: 'Para que serve?',
        text: [
          'A planilha "CONCLUÍDAS" traz com detalhes todas as sessões que estão em status "concluído" na planilha de previsões.',
          'Além disso, ela permite reverter a informação de concluído para pendente.',
          'Ainda é possível, caso necessário, alterar o status para "afastado" para colaboradores que estão em afastamento',
        ],
        list: false,
        icon: 'fa-solid fa-circle-info',
        images: false
      },
      {
        subtitle: 'Como atualizar a planilha concluídas?',
        text: [
          'Para atualizar a planilha de sessões concluídas você deve executar os seguintes passos:',
        ],
        list: [
          'Navegue até a aba "MACRO" da planilha',
          'Clique no quarto card disponível: "ATUALIZAR CONCLUÍDAS"',
          'Feito isso, a planilha de concluídos já estará atualizada, conforme a sua planilha de previsões'
        ],
        icon: 'fa-solid fa-circle-info',
        images: [cardConcluidas]
      },
      {
        subtitle: 'Visualização de informações',
        text: [
          'Nessa planilha é mostrado informações detalhadas de todas as sessões de acompanhamento que foram concluídas.',
          'Nela você verá todas as sessões concluídas de um mesmo colaborador.',
          'Além disso, os filtros permitem realizar diversas análies, como:',
        ],
        list: [
          'Quantidade de sessões concluidas por colaborador.',
          'Quantidade de sessões concluídas por departamento.',
          'Quantidade de de colaboradores que concluíram determinada sessão',
          'Quantidade de colaboradores por departamento que concluíram determinada sessão'
        ],
        icon: 'fa-solid fa-circle-info',
        images: false
      },
      {
        subtitle: 'Como reverter o status de uma sessão?',
        text: [
          'Na planilha "CONCLUÍDAS" nas colunas H e I estarão as ações disponíveis para cada colaborador, de acordo com a sua sessão.',
          'Ao reverter o status de uma sessão você altera também os status da sessões seguintes.',
          'Ex: caso o colaborador tenha concluído até a quarta sessão e você reverta o status da segunda sessão, logo as sessões 3 e 4 também voltarão a ficar pendentes, visto que não é possível realizar as sessões sem que a anterior tenha sido concluída.',
          'Siga as instruções abaixo para reverter o status de "concluído" para "pendente".'
        ],
        list: [
          'Para começar, entre na planilha "CONCLUÍDAS".',
          'Em seguida, navegue até a linha do colaborador que deseja reverter o status da sessão.',
          'Escolhido o colaborador, clique com o botão direito sobre a palavra "REVERTER".',
          'Feito isso, irá abrir uma janela de confirmação, caso realmente queira reverter o status, clique em "Sim".',
          'Após isso, o status da sessão de acompanhamento será alterado para "pendente", assim como as sessões posteriores a ela.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [alterarDataSessao, concluirSessao]
      },
      {
        subtitle: 'Como alterar o status de uma sessão concluída para afastado?',
        text: [
          'Na planilha "CONCLUÍDAS" nas colunas H e I estarão as ações disponíveis para cada colaborador, de acordo com a sua sessão.',
          'Ao alterar o status de uma sessão concluida para "afastado" você altera também os status da sessões seguintes.',
          'Ex: caso o colaborador tenha concluído até a quarta sessão e você altere o status da segunda sessão, logo todas as sessões a partir da segunda ficarão com o status de "AFASTADO".',
          'Siga as instruções abaixo para reverter o status de "concluído" para "afastado".'
        ],
        list: [
          'Para começar, entre na planilha "CONCLUÍDAS".',
          'Em seguida, navegue até a linha do colaborador que deseja reverter o status da sessão.',
          'Escolhido o colaborador, clique com o botão direito sobre a palavra "AFASTAR".',
          'Feito isso, irá abrir uma janela de confirmação, caso realmente queira alterar o status, clique em "Sim".',
          'Após isso, o status da sessão de acompanhamento será alterado para "afastado", assim como as sessões posteriores a ela.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [alterarDataSessao, concluirSessao]
      }
    ]
  },
  // PLANILHA SENSIBILIZAÇÃO
  {
    title: 'Planilha Sensibilização',
    steps: [
      {
        subtitle: 'Para que serve?',
        text: [
          'A planilha "SENSIBILIZAÇÃO" concentra a informação de todos os colaboradores que ainda não tiveram a sensibilização agendada',
          'Nesse caso, é uma planilha apenas para visualização de dados. A sensibilização deve ser agenda através da planilha "PREVISÕES"',
        ],
        list: false,
        icon: 'fa-solid fa-circle-info',
        images: false
      },
      {
        subtitle: 'Como atualizar a planilha sensibilização?',
        text: [
          'Para atualizar a planilha de sensibilização você deve executar os seguintes passos:',
        ],
        list: [
          'Navegue até a aba "MACRO" da planilha',
          'Clique no quinto card disponível: "ATUALIZAR SENSIBILIZAÇÃO"',
          'Feito isso, a planilha de sensibilização já estará atualizada, conforme a sua planilha de previsões'
        ],
        icon: 'fa-solid fa-circle-info',
        images: [cardSensibilizacao]
      }
    ]
  },
  // PLANILHA AFASTADO
  {
    title: 'Planilha Afastado',
    steps: [
      {
        subtitle: 'Para que serve?',
        text: [
          'A planilha "AFASTADO" concentra a informação de todos os colaboradores que estão em afastamento',
          'Nela, é possível visualizar todos os colaboradores em estado de afastamento e desde quando estão afastados.',
          'Além disso, é possível reverter o status de "AFASTADO" para "PENDENTE" novamente ou, para sessões posteriores a primeira, concluir determinado acompanhamento.',
        ],
        list: false,
        icon: 'fa-solid fa-circle-info',
        images: false
      },
      {
        subtitle: 'Como atualizar a planilha afastados?',
        text: [
          'Para atualizar a planilha de afastados você deve executar os seguintes passos:',
        ],
        list: [
          'Navegue até a aba "MACRO" da planilha',
          'Clique no sexto card disponível: "ATUALIZAR AFASTADOS"',
          'Feito isso, a planilha de afastados já estará atualizada, conforme a sua planilha de previsões'
        ],
        icon: 'fa-solid fa-circle-info',
        images: [cardAfastado]
      },
      {
        subtitle: 'Como reverter o status de uma sessão?',
        text: [
          'Na planilha "AFASTADO" nas colunas H e I estarão as ações disponíveis para cada colaborador, de acordo com a sua sessão.',
          'Ao reverter o status de uma sessão você altera também os status da sessões seguintes.',
          'Ex: caso o colaborador esteja afastado desde a segunda sessão e você reverta o status dela, logo todas as sessões posteriores também voltarão a ficar pendente.',
          'Siga as instruções abaixo para reverter o status de "afastado" para "pendente".'
        ],
        list: [
          'Para começar, entre na planilha "AFASTADO".',
          'Em seguida, navegue até a linha do colaborador que deseja reverter o status da sessão.',
          'Escolhido o colaborador, clique com o botão direito sobre a palavra "REVERTER".',
          'Feito isso, irá abrir uma janela de confirmação, caso realmente queira reverter o status, clique em "Sim".',
          'Após isso, o status da sessão de acompanhamento será alterado para "pendente", assim como as sessões posteriores a ela.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [colunasAfastado]
      },
      {
        subtitle: 'Como concluir uma sessão?',
        text: [
          'Na planilha "AFASTADO" nas colunas H e I estarão as ações disponíveis para cada colaborador, de acordo com a sua sessão.',
          'Caso a opção "CONCLUIR" esteja habilitada, quer dizer que a primeira sessão de acompanhamento do respectivo colaborador já foi concluída e você pode concluir a sessão em que o colaborador foi afastado.',
          'Siga as instruções abaixo para concluir uma sessão através da planilha de afastado.'
        ],
        list: [
          'Para começar, entre na planilha "AFASTADO".',
          'Em seguida, navegue até a linha do colaborador que deseja alterar a data da sessão.',
          'Escolhido o colaborador, clique com o botão direito sobre a palavra "CONCLUIR".',
          'Feito isso, irá abrir uma janela de confirmação, caso realmente queira concluir a sessão clique em "Sim".',
          'Após isso, o status da sessão de acompanhamento será alterado para concluído e a próxima sessão ficará pendente.'
        ],
        icon: 'fa-solid fa-circle-question',
        images: [colunasConcluidoAfastado]
      },
    ]
  },
  // PLANILHA SESSÕES PRÓXIMAS
  {
    title: 'Planilha Sessões Próximas',
    steps: [
      {
        subtitle: 'Para que serve?',
        text: [
          'A planilha "SESSÕES PRÓXIMAS" concentra a informação de todos os acompanhamentos que devem acontecer em um período de 20 dias',
          'Nesse caso, é uma planilha apenas para visualização de dados. A conclusão desses acompanhamentos devem ser feitos através da planilha "PREVISÕES", para primeiras sessões, ou "PENDENTE" para as demais sessões.',
          'Na coluna "F" é possível visualizar a data em que a sessão está marcada.',
          'Na coluna "G" é possível visualizar quantos dias faltam para a data do acompanhamento.',
        ],
        list: false,
        icon: 'fa-solid fa-circle-info',
        images: false
      },
      {
        subtitle: 'Como atualizar a planilha sessões próximas?',
        text: [
          'Para atualizar a planilha de sessões próximas você deve executar os seguintes passos:',
        ],
        list: [
          'Navegue até a aba "MACRO" da planilha',
          'Clique no sétimo card disponível: "ATUALIZAR SESSÕES PRÓXIMAS"',
          'Feito isso, a planilha de sessões próximas já estará atualizada, conforme a sua planilha de previsões'
        ],
        icon: 'fa-solid fa-circle-info',
        images: [cardProximas]
      },
    ]
  },
  // PLANILHA VENCIDAS
  {
    title: 'Planilha Vencidas',
    steps: [
      {
        subtitle: 'Para que serve?',
        text: [
          'A planilha "VENCIDAS" concentra a informação de todos os acompanhamentos que já deveriam ter acontecido, porém ainda estão com o status "PENDENTE"',
          'Nesse caso, é uma planilha apenas para visualização de dados. A conclusão desses acompanhamentos devem ser feitos através da planilha "PREVISÕES", para primeiras sessões, ou "PENDENTE" para as demais sessões.',
          'Na coluna "F" é possível visualizar qual seria a sessão de acompanhamento em questão',
          'Na coluna "G" é possível visualizar a data em que o acompanhamento está marcado.',
          'Na coluna "H" é possível visualizar há tempo a sessão deveria ter sido concluída.',
        ],
        list: false,
        icon: 'fa-solid fa-circle-info',
        images: false
      },
      {
        subtitle: 'Como atualizar a planilha vencidas?',
        text: [
          'Para atualizar a planilha de sessões vencidas você deve executar os seguintes passos:',
        ],
        list: [
          'Navegue até a aba "MACRO" da planilha',
          'Clique no oitavo card disponível: "ATUALIZAR VENCIDOS"',
          'Feito isso, a planilha de sessões vencidas já estará atualizada, conforme a sua planilha de previsões'
        ],
        icon: 'fa-solid fa-circle-info',
        images: [cardVencidas]
      }
    ]
  },
]