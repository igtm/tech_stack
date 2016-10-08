/**
 * Created by Tomokatsu on 2016/10/08.
 */
// action creator: action (typeとpayloadをもつobject) を作る関数群
export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};
