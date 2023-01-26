```
npm init -y
npm install express
npm install dotenv --save

npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string
npx sequelize-cli model:generate --name Role --attributes name:string

npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo:all

npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli seed:generate --name demo-role

npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
```