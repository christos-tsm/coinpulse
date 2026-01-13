import { fetcher } from "@/lib/coingecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import CandlestickChart from "../CandlestickChart";

const CoinOverview = async () => {
    try {
        const [coin, coinOHLC] = await Promise.all([
            await fetcher<CoinDetailsData>('coins/bitcoin'),
            await fetcher<OHLCData>('coins/bitcoin/ohlc', {
                vs_currency: 'usd',
                days: 1,
                precision: 'full'
            })
        ]);

        return (
            <div id="coin-overview">
                <CandlestickChart data={coinOHLC} coinId="bitcoin">
                    <div className="header pt-2">
                        <Image src={coin.image.large} alt="Bitcoin" width={56} height={56} />
                        <div className="info">
                            <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
                            <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
                        </div>
                    </div>
                </CandlestickChart>
            </div>
        )
    } catch (error) {
        console.log(error);
        return <div>Error loading coin overview</div>;
    }

}

export default CoinOverview