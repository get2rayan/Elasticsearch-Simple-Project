import elasticsearch from "elasticsearch"

function getClient() {
    // The `log: "trace"` attribute will show Elastic Client log.
    const client = new elasticsearch.Client({
        host: "localhost:9200",
        //log: "trace"
    })

    return client
}

export default getClient
