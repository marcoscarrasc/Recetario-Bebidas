import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../Components/DrinkCard" 

export default function IndexPage() {
    const drinks = useAppStore((state) => state.drinks)
    
    const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])

    return (
      <>
        <h1 className="text-6xl font-extrabold">Recetas</h1>

        {hasDrinks ? (
          <div className="grid grid-cols-3 md:grid-cols-3 2xl:grid-cols-3 my-10 gap-10">
            {drinks.drinks.map( (drink:any) => (
                <DrinkCard
                  key={drink.idDrink}
                  drink={drink}
                />
            ))}
          </div>
        ) : (
          <p className="my-10 text-center text-2xl">
              No  hay resultados aún, utiliza el formulario para buscar recetas
          </p>
        )}
      </>
    )
}
