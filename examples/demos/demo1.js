import React, { Component } from "react";
// import Input from 'react-widget-input';
// import Icon from 'react-widget-icon'
import { Button, ButtonGroup } from "../../src/index";

export default class DEMO extends Component {
	render() {
		return (
			<div>
				<button>Button</button>
				<div>
					<Button disabled>Button disabled</Button>{" "}
					<Button prefix={"> "}>按钮测试</Button> <Button size="small">按钮测试</Button>{" "}
					<Button active>Button active</Button>
					<Button size="large">按钮测试</Button>
				</div>
				<br />
				<div>
					<Button disabled type="primary">
						Button disabled
					</Button>{" "}
					<Button type="primary">按钮测试</Button>{" "}
					<Button type="primary" active>
						Button active
					</Button>
					<Button size="small" type="primary">
						按钮测试
					</Button>
					<Button size="large" type="primary" loading>
						按钮测试
					</Button>
					<Button size="large" type="primary" disabled>
						按钮测试
					</Button>
				</div>
				<div>
					<ButtonGroup>
						<Button>Button</Button>
						<Button>Button</Button>
						<Button>Button</Button>
					</ButtonGroup>
				</div>
				<div>
					<ButtonGroup size="small" type="primary">
						<Button>Button</Button>
						<Button>Button</Button>
						<Button>Button</Button>
					</ButtonGroup>
				</div>

				<div>
					<ButtonGroup size="large" disabled>
						<Button>Button</Button>
						<Button>Button</Button>
						<Button>Button</Button>
					</ButtonGroup>
				</div>
			</div>
		);
	}
}
