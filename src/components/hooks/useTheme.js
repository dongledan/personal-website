import { useEffect, useState } from "react";

export default () => {
	const [theme, setTheme] = useState("dark");
	const toggleTheme = () => {
		if (theme !== "light") {
			localStorage.setItem("theme", "light");
			setTheme("light");
		} else {
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		}
	};

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) {
			setTheme(localTheme);
		}
	}, {});

	return {
		theme,
		toggleTheme
	};
};
