# Create minikube cluster
minikube start -p new-project --kubernetes-version=v1.20.0

# Deploy all yaml file 
cd manifests
kustomize build | kubectl apply -f -     


# port-forward service
k port-forward svc/plugnmeet-frontent-service 3000:3000
k port-forward svc/plugnmeet-api-service 8080:8080
**Pord-forword service**

# Access front page
http://localhost:3000/login.html

# Input key and secret
api_key: "plugnmeet"
secret: "zumyyYWqv7KR2kUqvYdq4z4sXg7XTBD2ljT6"