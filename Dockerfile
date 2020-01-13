FROM ruby:2.6.5-alpine3.11

RUN apk add --no-cache g++ musl-dev make git \
	&& gem install eventmachine
RUN mkdir /usr/app
WORKDIR /usr/app

COPY Gemfile /usr/app/
COPY Gemfile.lock /usr/app/
RUN bundle install

EXPOSE 4000

ENTRYPOINT bundle exec jekyll serve --force_polling --host 0.0.0.0 --config _config.yml,_config_development.yml