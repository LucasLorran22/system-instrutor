// Dados simulados para demonstração
const instrutoresSimulados = [
    {
        id: 1,
        nome: "João Silva",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        avaliacao: 4.8,
        totalAvaliacoes: 127,
        experiencia: "8 anos",
        veiculo: "Volkswagen Gol 2020",
        cambio: "Manual",
        valorAula: 80,
        cidade: "São Paulo",
        especialidades: ["Primeira Habilitação", "Direção Defensiva"],
        descricao: "Instrutor experiente com foco em segurança e confiança do aluno."
    },
    {
        id: 2,
        nome: "Maria Santos",
        foto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        avaliacao: 4.9,
        totalAvaliacoes: 89,
        experiencia: "5 anos",
        veiculo: "Honda Civic 2021",
        cambio: "Automático",
        valorAula: 90,
        cidade: "Rio de Janeiro",
        especialidades: ["Primeira Habilitação", "Aulas para Idosos"],
        descricao: "Especialista em ensinar com paciência e didática personalizada."
    },
    {
        id: 3,
        nome: "Carlos Oliveira",
        foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        avaliacao: 4.7,
        totalAvaliacoes: 156,
        experiencia: "12 anos",
        veiculo: "Toyota Corolla 2019",
        cambio: "Manual",
        valorAula: 75,
        cidade: "Belo Horizonte",
        especialidades: ["Primeira Habilitação", "Reciclagem"],
        descricao: "Instrutor veterano com metodologia comprovada de ensino."
    }
];

// Navegação Mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Tabs na seção "Como Funciona"
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<div class="loading"></div> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Animação de números nas estatísticas
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(statNumber => {
                    animateNumber(statNumber);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Header transparente/opaco baseado no scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        });
    }
});

// Função para animar números
function animateNumber(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (element.textContent.includes('+')) {
            element.textContent = Math.floor(current) + '+';
        } else if (element.textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else if (element.textContent.includes('/')) {
            element.textContent = '24/7';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Sistema de autenticação simulado
class AuthSystem {
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    register(userData, userType) {
        const user = {
            id: Date.now(),
            ...userData,
            type: userType,
            createdAt: new Date().toISOString(),
            active: userType === 'aluno' ? true : false // Instrutores precisam de aprovação
        };

        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
        
        return user;
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.senha === password);
        if (user) {
            if (user.type === 'instrutor' && !user.active) {
                throw new Error('Conta de instrutor ainda não foi aprovada. Aguarde até 48 horas.');
            }
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }
        throw new Error('Email ou senha incorretos');
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

// Instância global do sistema de autenticação
const auth = new AuthSystem();

// Sistema de busca de instrutores
class InstrutorSearch {
    constructor() {
        this.instrutores = this.loadInstrutores();
        this.filtros = {
            cidade: '',
            cambio: '',
            valorMin: 0,
            valorMax: 200,
            avaliacao: 0
        };
    }

    loadInstrutores() {
        // Em um sistema real, isso viria de uma API
        // Por enquanto, usamos dados simulados
        return instrutoresSimulados;
    }

    buscar(filtros = {}) {
        this.filtros = { ...this.filtros, ...filtros };
        
        return this.instrutores.filter(instrutor => {
            if (this.filtros.cidade && !instrutor.cidade.toLowerCase().includes(this.filtros.cidade.toLowerCase())) {
                return false;
            }
            
            if (this.filtros.cambio && instrutor.cambio !== this.filtros.cambio) {
                return false;
            }
            
            if (instrutor.valorAula < this.filtros.valorMin || instrutor.valorAula > this.filtros.valorMax) {
                return false;
            }
            
            if (instrutor.avaliacao < this.filtros.avaliacao) {
                return false;
            }
            
            return true;
        });
    }

    getById(id) {
        return this.instrutores.find(instrutor => instrutor.id === parseInt(id));
    }
}

// Sistema de avaliações
class AvaliacaoSystem {
    constructor() {
        this.avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    }

    adicionarAvaliacao(instrutorId, alunoId, nota, comentario) {
        const avaliacao = {
            id: Date.now(),
            instrutorId,
            alunoId,
            nota,
            comentario,
            data: new Date().toISOString()
        };

        this.avaliacoes.push(avaliacao);
        localStorage.setItem('avaliacoes', JSON.stringify(this.avaliacoes));
        
        return avaliacao;
    }

    getAvaliacoesByInstrutor(instrutorId) {
        return this.avaliacoes.filter(av => av.instrutorId === instrutorId);
    }

    getMediaAvaliacao(instrutorId) {
        const avaliacoes = this.getAvaliacoesByInstrutor(instrutorId);
        if (avaliacoes.length === 0) return 0;
        
        const soma = avaliacoes.reduce((acc, av) => acc + av.nota, 0);
        return (soma / avaliacoes.length).toFixed(1);
    }
}

// Utilitários
const Utils = {
    formatarMoeda(valor) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor);
    },

    formatarData(data) {
        return new Intl.DateTimeFormat('pt-BR').format(new Date(data));
    },

    gerarEstrelas(avaliacao) {
        const estrelas = [];
        const avaliacaoInt = Math.floor(avaliacao);
        const temMeia = avaliacao % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
            if (i <= avaliacaoInt) {
                estrelas.push('<i class="fas fa-star"></i>');
            } else if (i === avaliacaoInt + 1 && temMeia) {
                estrelas.push('<i class="fas fa-star-half-alt"></i>');
            } else {
                estrelas.push('<i class="far fa-star"></i>');
            }
        }

        return estrelas.join('');
    },

    validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
        
        const cpfArray = cpf.split('').map(el => +el);
        const rest = (count) => (cpfArray.slice(0, count-12)
            .reduce((soma, el, index) => (soma + el * (count-index)), 0) * 10) % 11 % 10;
        
        return rest(10) === cpfArray[9] && rest(11) === cpfArray[10];
    },

    validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    validarTelefone(telefone) {
        const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        return regex.test(telefone);
    }
};

// Sistema de notificações
class NotificationSystem {
    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                max-width: 400px;
            `;
            document.body.appendChild(container);
        }
        return container;
    }

    show(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            background: ${this.getBackgroundColor(type)};
            color: white;
            padding: 1rem;
            margin-bottom: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;

        notification.innerHTML = `
            <i class="fas ${this.getIcon(type)}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" style="
                background: none;
                border: none;
                color: white;
                margin-left: auto;
                cursor: pointer;
                font-size: 1.2rem;
            ">&times;</button>
        `;

        this.container.appendChild(notification);

        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remover
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    getBackgroundColor(type) {
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        return colors[type] || colors.info;
    }

    getIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }
}

// Instância global do sistema de notificações
const notifications = new NotificationSystem();

// Exportar para uso global
window.auth = auth;
window.InstrutorSearch = InstrutorSearch;
window.AvaliacaoSystem = AvaliacaoSystem;
window.Utils = Utils;
window.notifications = notifications;
