import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'nil-icon';

export default class Button extends Component {
	static propTypes = {
		type: PropTypes.string,
		size: PropTypes.string,
		component: PropTypes.string,
		href: PropTypes.string,
		target: PropTypes.string,
		htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
		className: PropTypes.string,
		block: PropTypes.bool,
		//ghost: PropTypes.bool,// 后续实现
		circle: PropTypes.bool,
		disabled: PropTypes.bool,
		loading: PropTypes.bool,
		icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
		prefixCls: PropTypes.string,
		onClick: PropTypes.func
	};

	static defaultProps = {
		type: '',
		size: '',
		htmlType: 'button',
		className: '',
		disabled: false,
		prefixCls: 'nil-btn'
	};

	// 处理点击事件
	handleClick(event) {
		if (this.props.disabled || this.props.loading)
			return;

		if (this.props.onClick) {
			this.props.onClick(event);
		}
	}

	render() {
		const {
			prefixCls,
			htmlType,
			disabled,
			icon,
			type,
			size,
			block,
			className,
			circle,
			loading,
			href,
			target,
			component,
			children,
			...nodeProps
		} = this.props;

		if (disabled) {
			nodeProps['disabled'] = true;
		}

		let BtnIcon = typeof icon === 'string' ? <Icon type={icon} /> : icon;

		if (loading) {
			BtnIcon = <Icon type="loading" spin />;
		}

		const Node = component || (href || target ? 'a' : 'button');

		if (Node === 'button') {
			nodeProps['type'] = htmlType;
		}

		return (
			<Node
				{...nodeProps}
				href={href}
				target={target}
				onClick={(e) => this.handleClick(e)}
				className={classNames({
					[`${prefixCls}`]: true,
					[`${prefixCls}-${type}`]: type,
					[`${prefixCls}-block`]: block,
					[`${prefixCls}-${size}`]: size,
					[`${prefixCls}-circle`]: circle,
					[`${prefixCls}-loading`]: loading,
					[`${prefixCls}-icon-only`]: !children && icon,
					[`${prefixCls}-disabled`]: disabled,
					[className]: true
				})}>
				{BtnIcon}
				{children ? <span className={`${prefixCls}-text`}>{this.props.children}</span> : null}
			</Node>
		)
	}

}