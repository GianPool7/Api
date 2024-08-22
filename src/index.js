// importar express

import app from "./app.js";
import { PORT } from "./config.js";


// para escuchar el local
app.listen(PORT)

//

console.log('server runnig on port',PORT);



