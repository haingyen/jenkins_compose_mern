pipeline {
    agent {
        label 'compose'  // Chạy trên agent có label 'compose'
    }

    environment {
        NODE_ENV='production'
        PORT='5001'
        MONGO_INITDB_DATABASE='myapp'
        MONGODB_CONNECTIONSTRING='mongodb://database:27017/${MONGO_INITDB_DATABASE}'
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/haingyen/jenkins_compose_mern.git'
            }
        }
        
        stage('Build Images') {
            steps {
                sh 'docker-compose build'
            }
        }
        
        stage('Deploy Application') {
            steps {
                sh '''
                # Dừng containers cũ
                docker-compose down
                
                # Chạy containers mới
                docker-compose up -d
                
                # Dọn dẹp images cũ
                docker image prune -f
                '''
            }
        }
    }
}