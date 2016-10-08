/**
 * Created by Tomokatsu on 2016/10/08.
 */
// undefined以外を返さないとエラーになる！ nullはOK
// stateは 前の結果。残ってる。
// すなわち、必ず、stateの初期値を設定しなければならない！
// reducerは元の stateをいじってはいけない！ 純粋関数
// ex) X return state.push(action.payload)
// ex) ◯ return [...state, action.payload]  // spread operator(...): 配列を展開する演算子
export default (state = null, action) => {
	switch (action.type) {
		case "select_library":
			return action.payload;
		default:
			return state;
	}
};
