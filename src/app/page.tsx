"use client";

import TickerInput from "@/components/TickerInput";
import { useState } from "react";
import { OptimizedPortfolio } from "../../util/types";

export default function Home() {
	const [portfolioData, setPortfolioData] = useState<OptimizedPortfolio>();
	console.log(portfolioData);
	return (
		<main className="flex flex-col items-center justify-evenly w-full min-h-screen py-10 bg-gradient-to-br from-blue-700 to-blue-400">
			<div className="flex flex-col items-center justify-center min-h-[30vh]">
				<div className="text-white text-4xl border-b border-white p-4">Financial Portfolio Optimizer</div>
			</div>
			<div className="flex flex-col items-center justify-center w-1/2">
				<TickerInput setOptimizedPortfolio={setPortfolioData} />
			</div>
			{portfolioData &&
				(portfolioData.status != undefined ? (
					<div className="text-white text-bold text-center w-full">Please input valid stocks</div>
				) : (
					<div className="flex flex-col justify-center w-max my-10 items-center space-y-5">
						<div className="text-white text-3xl border-b border-white p-2">Optimized Portfolio</div>
						<div className="flex flex-col w-full items-start space-y-3 px-3">
							{Object.entries(portfolioData.optimizedPortfolio).map(([stock, fraction]) => {
								return (
									<div
										key={stock}
										className="flex flex-row justify-between items-center w-full text-white text-lg"
									>
										<div className="font-medium">{stock.toUpperCase()}:</div>
										<div>{(fraction * 100).toFixed(2)}%</div>
									</div>
								);
							})}
						</div>
						<div className="border border-white my-3 w-full"></div>
						<div className="flex flex-row justify-between items-center w-full text-white text-lg px-3">
							<div className="font-medium">Expected Returns:</div>
							<div className="">{(portfolioData.expectedReturns * 100).toFixed(2)}%</div>
						</div>
						<div className="flex flex-row justify-between items-center w-full text-white text-lg px-3">
							<div className="font-medium">Expected Risk:</div>
							<div className="">{(portfolioData.expectedRisk * 100).toFixed(2)}%</div>
						</div>
					</div>
				))}
			<div className="flex flex-col justify-center items-center w-1/2 text-white space-y-5 m-5">
				<div className="text-2xl font-semibold p-3 border-b border-white">About</div>
				<div className="font-light">
					The financial portfolio optimizer is a tool that finds the optimal portfolio given a selection of
					financial assets. The tool builds an investment portfolio with a mix of the given assets,
					allocationg a fraction of total capital to each one of them. The goal of the portfolio optimization
					is to find the values of the weights for each asset that maximize returns and minimize risk
					simultaneously of our portfolio. The tool uses a genetic algorithm to find the weights for each
					asset, utilzing the Sharpe ratio to evaluate fitness.
				</div>
			</div>
		</main>
	);
}
