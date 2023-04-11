import React, { HTMLAttributes, ReactNode } from "react";

export interface ContainerProps
	extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	fluid?: boolean;
	children: ReactNode;
}