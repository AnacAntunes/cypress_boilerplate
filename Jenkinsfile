pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Clonar o repositório do projeto
                git 'https://github.com/AnacAntunes/cypress_boilerplate.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Instalar as dependências do projeto
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Executar os testes usando o Cypress com o navegador Chrome
                sh 'npx cypress run -b chrome'
            }
        }
    }
}
