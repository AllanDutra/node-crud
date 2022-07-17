## 📚 Node CRUD
<p> This repository was developed following Rocketseat's <a><i>https://www.youtube.com/watch?v=9AO2hZJsHrs</i></a> video to learn how to create a CRUD in a Node API using Express, TypeORM and PostgreSQL</p>

## 📫 Routes

### CategoryController

<strong>POST</strong> — "/categories" 

<i>Create a new category</i>

<p>body:</p>

```
{
	"name": string,
	"description": string
}
```

<p>response:</p>

```
{
	"id": string,
	"name": string,
	"description": string,
	"created_at": Date
}
```

<hr>

<strong>GET</strong> — "/categories" 

<i>Get all categories</i>

response:

```
[
   {
	  "id": string,
	  "name": string,
	  "description": string,
	  "created_at": Date
   }
]
```

<hr>

<strong>DELETE</strong> — "/categories/{ id }" 

<i>Delete a category by your id</i>

<p>route params:</p>

`id: string`

<hr>

<strong>PUT</strong> — "/categories/{ id }" 

<i>Update category info by your id</i>

<p>route params:</p>

`id: string`

<p>body:</p>

```
{
	"name": string,
	"description": string
}
```

<p>response:</p>

```
{
	"id": string,
	"name": string,
	"description": string,
	"created_at": Date
}
```

### VideoController

<strong>POST</strong> — "/videos" 

<i>Create a new video</i>

<p>body:</p>

```
{
	"name": string,
	"description": string,
	"duration": number,
	"category_id": string
}
```

<p>response:</p>

```
{
	"id": string,
	"name": string,
	"description": string,
	"duration": number,
	"category_id": string,
	"created_at": Date
}
```

<hr>

<strong>GET</strong> — "/videos" 

<i>Get all videos</i>

response:

```
[
   {
	  "id": string,
	  "name": string,
	  "description": string,
	  "duration": number,
	  "category_id": string,
	  "created_at": Date,
	  "category": {
		  "id": string,
		  "name": string,
		  "description": string,
		  "created_at": Date
	  }
   }
]
```

## 🌐 Status
<p>Finished project ✅</p>

## 🧰 Prerequisites
<p>Node JS</p>

<p>Enviroment Variables</p>

- TYPEORM_CONNECTION
- TYPEORM_HOST
- TYPEORM_USERNAME
- TYPEORM_PASSWORD
- TYPEORM_DATABASE
- TYPEORM_PORT
- TYPEORM_MIGRATIONS = src/database/migrations/*.ts
- TYPEORM_MIGRATIONS_DIR = src/database/migrations
- TYPEORM_ENTITIES = src/entities/*.ts
- TYPEORM_ENTITIES_DIR = src/entities

## 🔧 Installation
`$ git clone https://github.com/AllanDutra/node-crud.git`

`$ cd node-crud`

`$ npm install`

`$ npm run dev`

<strong>Node server listenning at http://localhost:3333/!</strong>

## 🔨 Tools used

<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="80" /> 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="80" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="80" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="80" />
</div>

<hr>

Developed with 💜 by Allan Dutra!
