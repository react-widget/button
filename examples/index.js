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
        <Button size="large">测试</Button>
    </div>
    , demo);