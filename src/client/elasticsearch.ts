import elasticsearch from "elasticsearch"

class elasticClient {
    private static instance: elasticsearch.Client
    private constructor() {}

    public static getInstance(): elasticsearch.Client {
        if (!elasticClient.instance) {
            elasticClient.instance = new elasticsearch.Client({
                host: "localhost:9200",
                //log: "trace"
            })
        }
        return elasticClient.instance
    }
}

function getClient(): elasticsearch.Client {
    return elasticClient.getInstance()
}
export default getClient
