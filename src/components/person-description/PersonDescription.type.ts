import { Person } from "@/@types/person";

export interface PersonDescriptionProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	person: Person;
}
