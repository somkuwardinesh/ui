pipeline {
   agent any

   environment {
     // You must set the following environment variables
     ORGANIZATION_NAME = "dinesh-my-org-somkuwar"
     YOUR_DOCKERHUB_USERNAME = "dineshdocker3246"
	   
     DOCKERHUB_CREDENTIALS = credentials('DocJenkins')
     SERVICE_NAME = "first-frontend"
     REPOSITORY_TAG="${YOUR_DOCKERHUB_USERNAME}/${ORGANIZATION_NAME}-${SERVICE_NAME}:${BUILD_ID}"
   }

   stages {
      stage('Preparation') {
         steps {
            //cleanWs()
            // git credentialsId: 'GitHub', url: "https://github.com/${ORGANIZATION_NAME}/${SERVICE_NAME}"
		  sh 'ls -l'
		sh 'echo ${WORKSPACE}'
         }
      }

      stage('Build and Push Image') {
         steps {
           sh 'docker image build -t ${REPOSITORY_TAG} .'
	   sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
	   sh 'echo pushing image to docker hub D..'
	   sh 'docker image push ${REPOSITORY_TAG}'
         }
      }

      stage('Deploy to Cluster') {
          steps {
		 sh 'envsubst < ${WORKSPACE}/test-105-ui.yml | kubectl apply -f -'
     		
          }
      }
   }
}
