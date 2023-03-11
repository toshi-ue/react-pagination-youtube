setup:
		docker compose build
		@make yarn/install

yarn/install:
		./sc yarn install
