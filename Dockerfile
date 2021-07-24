#Dev Env
FROM ubuntu:latest
EXPOSE 8545 43824 443 20
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update -y && apt-get upgrade -y 
RUN apt install -y git 
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash \
    && apt-get install nodejs -yq \
    && apt-get install make -y
WORKDIR  /usr/src/app
COPY . ./
RUN git clone https://github.com/hendrash/poly-dragon-dev.git
RUN npm i -g truffle  \ 
	&& npm i -g typescript \
	&& npm i -g ts-node \ 
	&& npm i -g npm@latest \
	&& npm i -g npm i -g ganache-cli \
	&& npm i 

# RUN apt-get update && apt-get install -y curl build-essential libssl-dev pkg-config \
# && curl https://sh.rustup.rs -sSf | sh \
# && export PATH=$HOME/.cargo/bin:$PATH \ 
# && cargo install --features=ssl websocat
