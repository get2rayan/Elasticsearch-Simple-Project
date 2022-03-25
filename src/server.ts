import express, {Request, Response} from "express"
import getClient from "./client/elasticsearch"
import EpisodeController from "./EpisodeController"

const app = express()

const PORT = 3000 || process.env.PORT

// Enabling JSON Body by Express in the requests:
app.use(express.json())

app.get("/", async (request:Request, response:Response) => {
    const client = getClient()

    // Creating a registry in Elasticsearch:
    const result = await client.index({
        index: "elastic_test",
        type: "type_elastic_test",
        body: {
            user: "Developer",
            email: "email@dev.com",
            password: "password"
        }
    })

    // Make the searching:
    
    return response.json(result)
})

app.get("/episodes/create", EpisodeController.create)
app.get("/episodes/findAll", EpisodeController.findAll)
app.get("/episodes/findByID/:id", EpisodeController.findByID)
app.post("/episodes/addEpisode", EpisodeController.addEpisode)
app.post("/episodes/findByQuery", EpisodeController.findByQuery)

app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
