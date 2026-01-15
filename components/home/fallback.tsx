import DataTable from "../DataTable"

export const CoinOverviewFallback = () => {
    return (
        <div id="coin-overview-fallback" className="min-h-[88px] md:min-h-[98px]">
            <div className="header pt-2">
                <div className="header-image skeleton" />
                <div className="info">
                    <div className="header-line-sm skeleton" />
                    <div className="header-line-lg skeleton" />
                </div>
            </div>
        </div>
    )
}

export const TrendingCoinsFallback = () => {
    const skeletonData = Array.from({ length: 5 }, (_, i) => ({ id: i }))

    const columns: DataTableColumn<{ id: number }>[] = [
        {
            header: "Name",
            cellClassName: "name-cell",
            cell: () => (
                <div className="name-link">
                    <div className="name-image skeleton" />
                    <div className="name-line skeleton" />
                </div>
            )
        },
        {
            header: "24h Change",
            cellClassName: "name-cell",
            cell: () => (
                <div className="price-change">
                    <div className="change-icon skeleton" />
                </div>
            )
        },
        {
            header: "Price",
            cellClassName: "price-cell",
            cell: () => <div className="price-line skeleton" />
        }
    ]

    return (
        <div id="trending-coins-fallback" className="min-h-[380px] md:min-h-[400px]">
            <h4 className="mb-4">Trending Coins</h4>
            <DataTable
                columns={columns}
                data={skeletonData}
                rowKey={(item) => item.id.toString()}
                headerCellClassName="py-3"
                bodyCellClassName="py-2"
            />
        </div>
    )
}

export const CategoriesFallback = () => {
    const skeletonData = Array.from({ length: 10 }, (_, i) => ({ id: i }))

    const columns: DataTableColumn<{ id: number }>[] = [
        {
            header: 'Category',
            cellClassName: 'category-cell',
            cell: () => <div className="name-line skeleton" />
        },
        {
            header: 'Top Gainers',
            cellClassName: 'top-gainers-cell',
            cell: () => (
                <div className="flex gap-1">
                    <div className="name-image skeleton" style={{ width: 28, height: 28 }} />
                    <div className="name-image skeleton" style={{ width: 28, height: 28 }} />
                    <div className="name-image skeleton" style={{ width: 28, height: 28 }} />
                </div>
            )
        },
        {
            header: '24h Change',
            cellClassName: 'change-header-cell',
            cell: () => (
                <div className="price-change">
                    <div className="change-icon skeleton" />
                </div>
            )
        },
        {
            header: 'Market Cap',
            cellClassName: 'market-cap-cell',
            cell: () => <div className="price-line skeleton" />
        },
        {
            header: '24h Volume',
            cellClassName: 'volume-cell',
            cell: () => <div className="price-line skeleton" />
        }
    ]

    return (
        <div id="categories-fallback" className="custom-scrollbar">
            <h4>Top Categories</h4>
            <DataTable
                columns={columns}
                data={skeletonData}
                rowKey={(item) => item.id.toString()}
                tableClassName="mt-3"
            />
        </div>
    )
}

