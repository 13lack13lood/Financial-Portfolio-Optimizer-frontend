import { OptimizedPortfolio } from "./types";

const backend = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

const fetchOptimizedPortfolio = async (tickers: string) => {
    let input = tickers.trim().split(" ");

    const res = await fetch(backend + "portfolio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
    });

    const data: OptimizedPortfolio = await res.json();

    return data;
};

export { fetchOptimizedPortfolio };
