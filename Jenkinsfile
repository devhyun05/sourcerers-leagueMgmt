pipeline {
    agent {
        docker {
            image 'node:lts' 
            args '-p 3000:3000' 
        }
    }

    stages {
       stage('Build') {
            steps {
                dir('frontend'){
                    echo 'Building....'
                    sh 'npm install' 
                    sh 'npm run build' 
                }
               
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}