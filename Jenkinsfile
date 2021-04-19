timestamps {

  def String diretorioApp = ''
  def SONAR_URL = 'http://sonarqube.sede.crea-rj/'
  def SONAR_TOKEN = 'bd2012f36612a3c172becc1132288cb902f1152c'
  def ipMaquinas
  def GIT_BRANCH = env.BRANCH_NAME
  def String ambiente

  node() {
    stage('Checkout') {
      echo 'Iniciando Checkout do repositório'

      checkout scm

      if (GIT_BRANCH.equals("desenvolvimento")) {
        ambiente = 'dev'
        ipMaquinas = ['192.168.10.15']
      } else if (GIT_BRANCH.contains("v.")) {
        ambiente = 'prod'
        ipMaquinas = ['192.168.1.15', '192.168.1.18']
      } else {
        error("Nao existe pipeline para a branch ${GIT_BRANCH}")
      }
      echo "Ambiente: ${ambiente}"
    }

    stage('Build') {
      echo 'Iniciando build'
      if (ambiente.equals('prod')) {
        sh 'DOCKER_BUILDKIT=1 docker build --build-arg ambiente=prod -o dist .'
      } else {
        sh 'DOCKER_BUILDKIT=1 docker build --build-arg ambiente=dev -o dist .'
      }
    }

    stage('Sonar') {
      def DIR = sh (returnStdout: true, script: "echo \${PWD##*/} | tr '\\n' ' '").trim()
      sh (returnStdout: true, script: "docker run --rm -e SONAR_HOST_URL='${SONAR_URL}' -e SONAR_LOGIN='${SONAR_TOKEN}' -v '/opt/jenkins/workspace/${DIR}:/usr/src' sonarsource/sonar-scanner-cli")
    }

    stage('Deploy') {
      echo "Iniciando Deploy em ambiente de ${ambiente}"

      for (ip in ipMaquinas) {
        deploy(ip, diretorioApp)
      }
    }

    if (ambiente.equals('prod')) {

      stage('Merge com Master') {
        sh 'git branch -D master || true'
        sh 'git checkout origin/master -b master'
        sh "git merge tags/${GIT_BRANCH}"
        sh 'git push origin master'
      }

      stage('Merge com Desenvolvimento') {
        sh 'git branch -D desenvolvimento || true'
        sh 'git checkout origin/desenvolvimento -b desenvolvimento'
        sh 'git merge master'
        sh 'git push origin desenvolvimento'
      }
    }

  }
}

def deploy(String ipMaquina, String diretorioApp) {
  def user = 'jenkins'

  sh "ssh -o StrictHostKeyChecking=no -l ${user} ${ipMaquina} rm -rf /var/www/html/${diretorioApp}/index.html rm -rf /var/www/html/${diretorioApp}/favicon.ico rm -rf /var/www/html/${diretorioApp}/js rm -rf /var/www/html/${diretorioApp}/css rm -rf /var/www/html/${diretorioApp}/fonts"

  sh "scp -rC dist/${diretorioApp}/index.html dist/${diretorioApp}/favicon.ico dist/${diretorioApp}/js dist/${diretorioApp}/css dist/${diretorioApp}/fonts ${user}@${ipMaquina}:/var/www/html/"
}
