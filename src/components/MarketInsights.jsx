import React from 'react';
import './MarketInsights.css';

const MarketInsights = () => {
  const insights = [
    {
      title: 'Crescimento do Mercado de QA Automation',
      content: 'O mercado global de automação de testes deve crescer de $20.7 bilhões em 2021 para $49.9 bilhões até 2026, com uma taxa de crescimento anual de 19.2%.',
      source: 'MarketsandMarkets Research',
      trend: '+19.2%',
      icon: '📈'
    },
    {
      title: 'IA na Automação de Testes',
      content: 'Ferramentas de IA estão revolucionando os testes, com 73% das empresas planejando implementar IA em seus processos de QA nos próximos 2 anos.',
      source: 'World Quality Report 2024',
      trend: '73%',
      icon: '🤖'
    },
    {
      title: 'Shift-Left Testing',
      content: 'A abordagem Shift-Left está se tornando padrão, com 68% das organizações movendo testes para fases mais iniciais do desenvolvimento.',
      source: 'DevOps Institute',
      trend: '68%',
      icon: '⬅️'
    },
    {
      title: 'CI/CD e DevOps',
      content: 'Organizações com pipelines CI/CD maduros deployam código 46x mais frequentemente e têm taxas de falha 5x menores.',
      source: 'State of DevOps Report',
      trend: '46x',
      icon: '🚀'
    }
  ];

  const bestPractices = [
    {
      title: 'Test Pyramid Strategy',
      description: 'Implementar uma estratégia balanceada com mais testes unitários, menos testes de integração e poucos testes E2E.',
      importance: 'Alta'
    },
    {
      title: 'API-First Testing',
      description: 'Priorizar testes de API para validar a lógica de negócio antes dos testes de interface.',
      importance: 'Alta'
    },
    {
      title: 'Continuous Testing',
      description: 'Integrar testes automatizados em todas as fases do pipeline CI/CD.',
      importance: 'Crítica'
    },
    {
      title: 'Risk-Based Testing',
      description: 'Focar esforços de teste nas áreas de maior risco e impacto no negócio.',
      importance: 'Média'
    }
  ];

  return (
    <section id="insights" className="market-insights">
      <div className="container">
        <h2 className="section-title text-center">Tendências e Insights do Mercado</h2>
        <p className="section-subtitle text-center">
          Dados e tendências atuais que moldam o futuro da qualidade de software
        </p>

        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <div className="insight-header">
                <span className="insight-icon">{insight.icon}</span>
                <span className="insight-trend">{insight.trend}</span>
              </div>
              <h3 className="insight-title">{insight.title}</h3>
              <p className="insight-content">{insight.content}</p>
              <div className="insight-source">
                <small>Fonte: {insight.source}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="best-practices">
          <h3 className="practices-title">Melhores Práticas em QA</h3>
          <div className="practices-grid">
            {bestPractices.map((practice, index) => (
              <div key={index} className="practice-card">
                <div className="practice-header">
                  <h4 className="practice-title">{practice.title}</h4>
                  <span className={`importance-badge ${practice.importance.toLowerCase()}`}>
                    {practice.importance}
                  </span>
                </div>
                <p className="practice-description">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="qa-metrics">
          <h3 className="metrics-title">Exemplo Visual de Indicadores</h3>
          <p className="metrics-subtitle">Modelo de acompanhamento para visão de qualidade e estabilidade de processos.</p>
          <div className="metrics-container">
            <div className="metric-item">
              <div className="metric-circle">
                <span className="metric-value">99.5%</span>
              </div>
              <h4>Coverage</h4>
              <p>Indicador de cobertura de testes automatizados</p>
              <p className="metric-note">Exemplo visual de painel</p>
            </div>

            <div className="metric-item">
              <div className="metric-circle">
                <span className="metric-value">&lt; 2min</span>
              </div>
              <h4>Tempo de Execução</h4>
              <p>Indicador de rapidez de validação de pipelines</p>
              <p className="metric-note">Modelo de acompanhamento</p>
            </div>

            <div className="metric-item">
              <div className="metric-circle">
                <span className="metric-value">0.1%</span>
              </div>
              <h4>Defect Rate</h4>
              <p>Indicador de qualidade do software em produção</p>
              <p className="metric-note">Visão de processo</p>
            </div>

            <div className="metric-item">
              <div className="metric-circle">
                <span className="metric-value">24h</span>
              </div>
              <h4>MTTR</h4>
              <p>Indicador de tempo de resolução de incidentes</p>
              <p className="metric-note">Painel de referência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;

