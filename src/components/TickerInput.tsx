"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";
import { OptimizedPortfolio } from "../../util/types";
import { fetchOptimizedPortfolio } from "../../util/BackendFetchData";

interface Props {
	setOptimizedPortfolio: (input: OptimizedPortfolio) => void;
}

const TickerInput = ({ setOptimizedPortfolio }: Props) => {
	return (
		<Formik
			initialValues={{
				tickers: "",
			}}
			onSubmit={async (values) => {
				setOptimizedPortfolio(await fetchOptimizedPortfolio(values.tickers));
			}}
		>
			<Form className="flex flex-col w-full items-center justify-center">
				<div className="text-white text-xl font-semibold py-2 w-full text-center">
					Enter stock tickers seperated by space
				</div>
				<Field
					className="text-white text-lg w-full h-52 font-light rounded-xl px-4 py-2 outline-none border-2 border-white bg-transparent mb-7"
					name="tickers"
					component="textarea"
				/>
				<ErrorMessage
					component="a"
					className="text-base text-red-400  font-semibold text-loss-m mt-3 pl-2"
					name="name"
				/>
				<button
					type="submit"
					className="text-white rounded-full mx-auto px-6 py-1 w-fit text-center text-xl border-2 transition-all duration-200 hover:scale-110 border-white bg-transparent"
				>
					Optimize
				</button>
			</Form>
		</Formik>
	);
};

export default TickerInput;
