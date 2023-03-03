import { useState } from "react"
import ItemsList from "../components/list/ItemsList"
import ListFiltersControls from "../components/list/ListFiltersControl"

const News = () => {
    const [filters, setFilters] = useState({
    })
    return (
        <div>
            <ListFiltersControls filters={filters}/>
            <ItemsList />
        </div>
    )
}

export default News