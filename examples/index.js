import "normalize.css";
import "../src/style/index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../src';

const t = <div>ad</div>;

ReactDOM.render(
    <div>
        <Button size="small">测试</Button>
        <Button>测试</Button>
        <Button type="primary">测试</Button>
        <Button type="danger">测试danger</Button>
        <Button type="warning">测试warning</Button>
        <Button type="success">测试success</Button>
        <Button type="success" disabled>测试success</Button>
        <Button type="info">测试info</Button>
        <Button type="ghost">测试ghost</Button>
        <Button size="large">测试</Button>
        <Button type="dashed">测试</Button>
    </div>
    , demo);