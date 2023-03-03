# Docker commands
After lunching the commands below, open Docker Desktop.

Commands to build images:

- in client folder:  _docker build . -t dockerized-drone-simulator_
- in server folder:  _docker build . -t dockerized-drone-server_

Commands to run containers:
- for client:  _docker run -p 3000:3000 -d dockerized-drone-simulator_
- for server:  _docker run -p 5000:5000 -d dockerized-drone-server_


# KUBERNETS COMMANDS

creting dockerhub files:
```sh
docker tag dockerized-drone-simulator vannisil/dockerized-drone-simulator
docker push vannisil/dockerized-drone-simulator
```

Starting kubernetes:
```sh
# Minikube reccommended version: 1.29.0
minikube start
# Deployments
kubectl apply -f ./client/client.yaml
kubectl apply -f ./server/server.yaml
# Services
# kubectl port-forward <pod name> 5000:5000 for server
# minikube service avnet-frontend --url
kubectl apply -f ./server/frontend-service.yaml
kubectl apply -f ./server/backend-service.yaml
kubectl apply -f ./server/lb-avnet.yaml


#Load Balancer
minikube service lb-avnet
kubectl get pods
kubectl port-forward 'podname' 5000:5000
```