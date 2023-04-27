import React from 'react';
import { withLayout } from "@/hok";
import { NotFound } from "@/page-components";

const Page404 = () => {
	return (
		<NotFound />
	);
};

export default withLayout(Page404);
