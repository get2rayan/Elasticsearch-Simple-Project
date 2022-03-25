## Installing Elasticsearch and Kibana

- Create a docker-compose.yml file to install the Elasticsearch and Kibana by using the following command:
`docker-compose up -d`

- If the installation results in success, you will se a container running by using:
`docker ps`

We have two application:

- The connection with Elasticsearch is running on: http://localhost:9200. Accessing it, we will face something like this:
```
// 20220325170317
// http://localhost:9200/

{
  "name": "code",
  "cluster_name": "docker-cluster",
  "cluster_uuid": "code",
  "version": {
    "number": "7.9.2",
    "build_flavor": "default",
    "build_type": "docker",
    "build_hash": "code",
    "build_date": "2020-09-23T00:45:33.626720Z",
    "build_snapshot": false,
    "lucene_version": "8.6.2",
    "minimum_wire_compatibility_version": "6.8.0",
    "minimum_index_compatibility_version": "6.0.0-beta1"
  },
  "tagline": "You Know, for Search"
}
```

- The Kibana dashboard is on: http://localhost:5601. Accessing it, we will face the Kibana Dashboard interface.


## Starting our NodeJS Project

- Create a default project using Yarn `init -y` command:
`yarn init -y`

- Let's add TypeScript to our dependencies only for development:
`yarn add typescript ts-node-dev -D`

- We will need Express to do the requests:
`yarn add express`

- Now we need to add the Express dependency types:
`yarn add @types/express -D`

- Let's add the Elasticsearch dependency and its types:
`yarn add elasticsearch`, `yarn add @types/elasticsearch -D`

- And for last, let's create out tsconfig.json file:
`yarn tsc --init`


The application runs on http://localhost:3000/, and have the following routes:

`http://localhost:3000/episodes/create` -> "push" the static data of the episodes list to the Elasticsearch.

`http://localhost:3000/episodes/findAll` -> show all the results.

`http://localhost:3000/episodes/findByID/:id` -> find an episode by its ID.
