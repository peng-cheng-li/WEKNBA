start:
	cd manifests
	kustomize build | kubectl apply -f - 
