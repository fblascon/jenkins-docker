pipeline {
    agent any
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
