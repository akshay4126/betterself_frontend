node {

  def folder = 'betterself_frontend'
  def branches = [
    'master': [
       'host': 'betterself.today',
       'url': 'https://betterself.today/',
       'pem': '/var/lib/jenkins/betterself-dev.pem',
       'command': 'npm run build:prod'
    ],

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

    npm install || exit 1
    ${command} || exit 1

   sudo supervisorctl restart frontend:*
  """, returnStatus: true)

  if (result == 0) {
    currentBuild.result = 'SUCCESS'
    slackSend color: 'good', message: "Deploy ${url} is success!", channel: "#betterself_jenkins"
  } else {
    currentBuild.result = 'FAILURE'
    slackSend color: 'bad', message: "Deploy ${url} is FAILED!!! See console log in ${env.BUILD_URL} console", channel: "#betterself_jenkins"
  }
}
