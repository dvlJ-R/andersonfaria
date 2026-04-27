import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Playwright com TypeScript: como estruturar um projeto E2E profissional',
      excerpt: 'Guia prático para configurar um projeto Playwright + TypeScript com boas práticas, Page Objects e execução cross-browser.',
      date: '2024-04-10',
      readTime: '9 min',
      category: 'Playwright',
      tags: ['Playwright', 'TypeScript', 'E2E'],
      image: '🎭'
    },
    {
      title: 'Cypress vs Playwright: quando usar cada ferramenta',
      excerpt: 'Análise prática das diferenças entre Cypress e Playwright, com foco em casos de uso e estabilidade de testes.',
      date: '2024-03-22',
      readTime: '10 min',
      category: 'Comparação',
      tags: ['Cypress', 'Playwright', 'Automação'],
      image: '⚖️'
    },
    {
      title: 'Page Objects em automação de testes: quando ajudam e quando atrapalham',
      excerpt: 'Entenda os benefícios e os limites do padrão Page Object em projetos de automação de testes.',
      date: '2024-03-05',
      readTime: '8 min',
      category: 'Estratégia',
      tags: ['Page Objects', 'Design', 'QA'],
      image: '🧩'
    },
    {
      title: 'Como integrar testes Playwright em GitHub Actions',
      excerpt: 'Passo a passo para executar suites Playwright em GitHub Actions com relatórios e execução contínua.',
      date: '2024-02-18',
      readTime: '11 min',
      category: 'DevOps',
      tags: ['GitHub Actions', 'CI/CD', 'Playwright'],
      image: '⚙️'
    },
    {
      title: 'Boas práticas para testes E2E estáveis',
      excerpt: 'Principais práticas para manter uma suíte E2E confiável, resiliente e de fácil manutenção.',
      date: '2024-02-05',
      readTime: '8 min',
      category: 'Best Practices',
      tags: ['E2E Testing', 'Estabilidade', 'Maintenance'],
      image: '✅'
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

