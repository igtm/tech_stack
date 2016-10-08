/**
 * Created by Tomokatsu on 2016/10/08.
 */
import React, { Component } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View,
	LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions' // defaultではなく複数exportしたものを読み込むために、* as [name]を使う。// index.jsは自動で呼ばれる

class ListItem extends Component {
	// lifeCycle
	componentWillUpdate(){
		// コレ入れるだけで、update時のrenderにアニメーション付けれる！
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, expanded } = this.props;

		if ( expanded ) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>{library.description}</Text>
				</CardSection>
			)
		}
	}

	render(){
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = (state, ownProps) => {
/*
idを渡して、Componentの中で id === id みたいなロジックを書くより、ここで、true/falseを渡すだけのほうがいい！
	return { selectedLibraryId: state.selectedLibraryId };
*/
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem); // 1: mapStateToProps, 2: actions

// Reduxなら、state.dispatchでactionを送れるが、react-reduxでは ActionCreatorを使ってactionを送る
