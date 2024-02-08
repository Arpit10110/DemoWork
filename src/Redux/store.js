import {configureStore} from "@reduxjs/toolkit"
import { LocalData } from "./reducer"
const store= configureStore({
    reducer:{
        fav :LocalData
    }
})
export default store