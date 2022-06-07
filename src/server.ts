import { format } from "date-fns"
import { app } from "./app"

const port = 3001
const startDate = format(new Date(), 'dd/MM/yyyy hh:mm:ss')

main()

async function main (){

    try {

        await startAppListen()
        .then(() => {
            console.log(`${startDate} - servidor iniciando na porta ${port}`)
        })
        
    } catch (err) {
        console.log(err)
    }

    async function startAppListen(): Promise<void>{
        return new Promise(async(resolve, reject) => {
            app.listen(port, () => {
                resolve()
            })
        })
    }
}