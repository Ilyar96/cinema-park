import { bindActionCreators } from "redux";
import { useAppDispatch } from "@/store/store";
import * as AllActions from "@/store/actions";

export const useActions = () => {
	const dispatch = useAppDispatch();

	return { ...bindActionCreators(AllActions, dispatch), dispatch };
};
