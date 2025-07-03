import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Como Configurar Testes com Cypress: Guia Completo',
      excerpt: 'Aprenda a configurar e implementar testes end-to-end com Cypress, desde a instalação até a criação de testes complexos com boas práticas.',
      date: '2024-01-15',
      readTime: '8 min',
      category: 'Tutorial',
      tags: ['Cypress', 'E2E Testing', 'JavaScript'],
      image: '🔧'
    },
    {
      title: 'Selenium vs Cypress: Qual Escolher em 2024?',
      excerpt: 'Comparação detalhada entre Selenium e Cypress, analisando prós, contras, performance e casos de uso ideais para cada ferramenta.',
      date: '2024-01-10',
      readTime: '12 min',
      category: 'Comparação',
      tags: ['Selenium', 'Cypress', 'Automação'],
      image: '⚖️'
    },
    {
      title: 'Estratégias de Teste de API com Postman',
      excerpt: 'Técnicas avançadas para testes de API usando Postman, incluindo automação, validação de dados e integração com CI/CD.',
      date: '2024-01-05',
      readTime: '10 min',
      category: 'API Testing',
      tags: ['Postman', 'API', 'Automação'],
      image: '📡'
    },
    {
      title: 'Construindo Pipelines de QA com GitLab CI/CD',
      excerpt: 'Como implementar pipelines eficientes de QA usando GitLab CI/CD, incluindo testes automatizados, relatórios e deploy contínuo.',
      date: '2023-12-28',
      readTime: '15 min',
      category: 'DevOps',
      tags: ['GitLab', 'CI/CD', 'Pipeline'],
      image: '🚀'
    },
    {
      title: 'Test Pyramid: Estratégia para Testes Eficientes',
      excerpt: 'Entenda a pirâmide de testes e como aplicar essa estratégia para criar uma suíte de testes balanceada e eficiente.',
      date: '2023-12-20',
      readTime: '7 min',
      category: 'Estratégia',
      tags: ['Test Strategy', 'Best Practices', 'QA'],
      image: '🔺'
    },
    {
      title: 'IA na Automação de Testes: O Futuro do QA',
      excerpt: 'Explore como a Inteligência Artificial está transformando a automação de testes e o que esperar do futuro do QA.',
      date: '2023-12-15',
      readTime: '11 min',
      category: 'Tendências',
      tags: ['AI', 'Machine Learning', 'Future'],
      image: '🤖'
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title text-center">Blog & Recursos</h2>
        <p className="section-subtitle text-center">
          Artigos e tutoriais sobre QA, automação de testes e melhores práticas
        </p>

        <div className="blog-filter">
          <button className="filter-btn active" data-filter="all">
            Todos
          </button>
          {categories.map((category, index) => (
            <button key={index} className="filter-btn" data-filter={category.toLowerCase()}>
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className={`blog-card ${post.category.toLowerCase()}`}>
              <div className="blog-header">
                <div className="blog-image">
                  <span className="blog-icon">{post.image}</span>
                </div>
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>

              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-tags">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="blog-footer">
                <span className="read-time">⏱️ {post.readTime} de leitura</span>
                <button className="read-more-btn">Ler Artigo</button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <h3>Quer aprender mais sobre QA?</h3>
          <p>
            Publico regularmente conteúdo sobre automação de testes, melhores práticas 
            e tendências do mercado de QA. Acompanhe para se manter atualizado!
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Ver Todos os Artigos</button>
            <button className="btn btn-accent">Assinar Newsletter</button>
          </div>
        </div>

        <div className="learning-resources">
          <h3 className="resources-title">Recursos de Aprendizado</h3>
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">📚</div>
              <h4>Guias Práticos</h4>
              <p>Tutoriais passo a passo para implementar automação de testes</p>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">💡</div>
              <h4>Dicas e Truques</h4>
              <p>Técnicas avançadas e soluções para problemas comuns em QA</p>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">🎯</div>
              <h4>Estudos de Caso</h4>
              <p>Análises detalhadas de projetos reais e lições aprendidas</p>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">🔄</div>
              <h4>Atualizações</h4>
              <p>Novidades sobre ferramentas e tendências do mercado de QA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

