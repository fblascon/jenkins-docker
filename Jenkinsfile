pipeline {
    agent {
        docker { image 'node:20' }
    }
    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Lint') {
            steps {
                sh 'npx ng lint'
            }
        }
        stage('Test') {
            steps {
                sh 'npx ng test --watch=false'
            }
        }
        stage('Build') {
            steps {
                sh 'npx ng build --configuration production'
            }
        }
    }
}

// admin
// password: a4efc28ed0714149b4b530e06fdbb2f9