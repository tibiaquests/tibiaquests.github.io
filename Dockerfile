FROM node:12.18.3 AS build
# Declara o argumento ambiente a ser passado no momento do build (--build-art ambiente=dev ou prod)
ARG ambiente
# Define app como o diretório de trabalho
WORKDIR /app
# Instalar o quasar globalmente
RUN npm install -g @quasar/cli
# Copia o package.json primeiro para aproveitar cache do docker
# Ou seja, so baixara as dependencias novamente, se o package.json mudar
COPY package.json .
# Instala dependencias
RUN npm install
# Copia o restante do projeto para dentro da imagem
COPY . .
# Faz o build de acordo com o ambiente Dev ou Prod
RUN if [ $ambiente = "prod" ] ; then prod=true quasar build ; elif [ $ambiente = "dev" ] ; then dev=true quasar build ; else echo "Ambiente especificado é inválido" ; fi

FROM scratch AS dist
COPY --from=build /app/dist /

# Como fazer o build do projeto utilizando este dockerfile:
# DOCKER_BUILDKIT=1 docker build --build-arg ambiente=dev -o dist .
