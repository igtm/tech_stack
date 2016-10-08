/**
 * Created by Tomokatsu on 2016/10/08.
 */
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	// lifeCycleMethod 自動で呼ばれる特別なmethod
	componentWillMount(){
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(this.props.libraries); // ListViewに表示するdataをコントロールする dataSource
	}

	// １つのrowをrenderする
	renderRow(library){
		return <ListItem library={library} />;
	}

	render(){
		return (
		<ListView
			dataSource={this.dataSource}
			renderRow={this.renderRow}
			/>
		);
	}
}

// もはや、mapGlobalStateToProps と言ったほうがよいと思う。
const mapStateToProps = state => {
	console.log(state); // combineReducersで返された中身 object
	return { libraries: state.libraries };
};

// 1: storeから stateを取ってくる -> mapStateToProps が返す値が 2の Component  の props に渡る
export default connect(mapStateToProps)(LibraryList);

// [ react-redux ] 関係性
// state(Provider -> store -> reducer/state) から Componentへ
// Component から (Provider -> store -> reducer/state) へ繋がるために connectを使う。

// [ react-native ] ListView
// 見えてる部分だけメモリにインスタンス化
// 見えなくなったinstance -> 見えそうなinstanceに 再利用する。
