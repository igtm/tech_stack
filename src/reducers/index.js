/**
 * Created by Tomokatsu on 2016/10/08.
 */
// reducerをまとめて返す。
import  { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// 一番最初にも1回呼ばれてdefault値を得る。
export default combineReducers({
	libraries: LibraryReducer,  //  データの名前: データを作るreducerの名前
	selectedLibraryId: SelectionReducer
});

// reducerはアプリのstateを返す。
