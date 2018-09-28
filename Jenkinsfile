node {

  def folder = 'flyp_frontend'
  def branches = [
    'master': [
      'host': 'staging.flyp.bet',
      'url': 'http://staging.flyp.bet',
      'pem': '/var/lib/jenkins/wyldata.pem',
      'command': 'npm run build:staging'
    ],
    'production': [
      'host': 'flyp.bet',
      'url': 'https://flyp.bet',
      'pem': '/var/lib/jenkins/wyldata.pem',
      'command': 'npm run build:prod'
    ]
  ]

  echo "${env.BRANCH_NAME}, ${env}"
  def branch = branches[env.BRANCH_NAME]
  def host = branch['host']
  def url = branch['url']
  def pem = branch['pem']
  def command = branch['command']

  stage "build"
  result = sh (script: """
    ssh -T -i ${pem} ubuntu@${host}  << EOF

    cd ${folder}

    git reset --hard
    git checkout ${env.BRANCH_NAME}
    git pull

    sudo cp deploy/${env.BRANCH_NAME}/flyp_bet.nginx /etc/nginx/sites-enabled/ || exit 1
    sudo cp deploy/flyp_bet.conf /etc/supervisor/conf.d/ || exit 1

    npm install || exit 1
    ${command} || exit 1

    sudo service supervisor restart
    sudo service nginx restart
  """, returnStatus: true)

  if (result == 0) {
    currentBuild.result = 'SUCCESS'
    slackSend color: 'good', message: "Deploy ${url} is success!", channel: "#wyldata_jenkins"
  } else {
    currentBuild.result = 'FAILURE'
    slackSend color: 'bad', message: "Deploy ${url} is FAILED!!! See console log in ${env.BUILD_URL} console", channel: "#wyldata_jenkins"
  }
}
