import { useEffect, useState } from "react"

export const FilterBy = ({onFilterBy}) => {

    const [filterBy, setFilterBy] = useState({ task: '' })

    useEffect(() => {
        console.log('filterBy:', filterBy)
        onFilterBy(filterBy)

    }, [filterBy])

    const handleChange = (ev) => {
        const value = ev.target.value
        const field = ev.target.name
        setFilterBy({ ...filterBy, [field]: value })
    }


    return (

        <section className="filter-by">

            <form>

                <input
                    type="text"
                    name="task"
                    onChange={handleChange}
                />

                <button>filter</button>
            </form>

        </section>

    )
}

