import { OptimizedPortfolio } from "./types";

const backend = "http://localhost:8080/";

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
