# How To Run

1. Apply Config Map

```shell
kubectl apply -f ./infra/k8s/mongo-configmap.yaml
```

2. Apply Secret

```shell
kubectl apply -f ./infra/k8s/mongo-secret.yaml
```

3. Apply Mongo

```shell
kubectl apply -f ./infra/k8s/mongo-deployment.yaml
```

4. Apply Mongo Express

```shell
kubectl apply -f ./infra/k8s/mongo-express-deployment.yaml
```
