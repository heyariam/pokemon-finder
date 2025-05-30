import Link  from "next/link";

interface PokemonCardsProps {
    name: string
}


export function PokemonCard ({name} : PokemonCardsProps) {
 
    // pikachu
    // get the API data for pikachu
   

  
    return(
        <Link
        href={`/${name}`}
          className= "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-50"
          key={name + "Card"}
        >
         <div>
            <h2 className={`mb-3 text-2xl font-semibold`}>
                {name}
            </h2>
           
         </div>
        </Link>
    )
}

export default PokemonCard;