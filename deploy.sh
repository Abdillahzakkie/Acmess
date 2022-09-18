heroku container:login
docker build -t registry.heroku.com/acme-widget/web .
docker push registry.heroku.com/acme-widget/web
heroku container:release web -a acme-widget
heroku logs --tail -a acme-widget
