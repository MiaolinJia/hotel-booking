import SearchFilter from "./SearchFilter.tsx";


function SearchResultMainComponent() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex gap-8">
                <aside className="w-80 flex-shrink-0">
                    <SearchFilter />
                </aside>

                <main className="flex-1">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Search Results</h1>
                        <p className="text-gray-600 mt-2">
                            Found 50 hotels in Baltimore
                        </p>
                    </div>
                    {/*<HotelList hotels={hotels} />*/}
                </main>
            </div>
        </div>
    );
}

export default SearchResultMainComponent;