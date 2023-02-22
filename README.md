After lunching the commands below, open Docker Desktop.

Commands to build images:

- in client folder:  _docker build . -t dockerized-drone-simulator_
- in server folder:  _docker build . -t dockerized-drone-server_

Commands to run containers:
- for client:  _docker run -p 3000:3000 -d dockerized-drone-simulator_
- for server:  _docker run -p 5000:5000 -d dockerized-drone-server_





KUBERNETS COMMANDS

creting dockerhub files:
-docker tag dockerized-drone-simulator vannisil/dockerized-drone-simulator
-docker push vannisil/dockerized-drone-simulator

starting kubernetes:
-minikube start
-kubectl apply -f client.yaml
-kubectl port-forward <pod name> 5000:5000 for server
-minikube service avnet-frontend --url