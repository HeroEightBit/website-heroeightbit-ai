export const RecipeCard = () => {
    return (
        <main className='flex flex-col gap-4 bg-red-800 rounded-md p-8 w-full m-4'>
            <h2 className='text-2xl font-bold'>Strawberry Chicken Pecan Salad</h2>
            <div className='flex gap-4'>
            <p>Servings: 1</p>
            <p>Calories: 450</p>
            <p>Protein: 30g</p>
            </div>
            <h3 className='font-bold'>Ingredients</h3>
            <ul className='list-disc'>
                <li>Lettuce</li>
                <li>Chicken</li>
                <li>Pecans</li>
                <li>Strawberries</li>
                <li>Blueberries</li>
                <li>Feta Cheese</li>
                <li>Raspberry Vinaigrette</li>
            </ul>
            <h3 className='font-bold'>Instructions</h3>
            <ul className='list-decimal'>
                <li>Cook the chicken.</li>
                <li>Add lettuce.</li>
                <li>Add Chicken</li>
                <li>Add Strawberries</li>
                <li>Add Blueberries</li>
                <li>Add Pecans</li>
                <li>Add Feta Cheese</li>
            </ul>
        </main>
    )
}

