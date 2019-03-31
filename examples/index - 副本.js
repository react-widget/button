import "normalize.css";
import "../src/style/index.scss";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup } from '../src';


ReactDOM.render(
    <div>
        <Button size="small">测试</Button>
        <Button>测试</Button>
        <Button type="primary">测试</Button>
        <Button type="danger">测试danger</Button>
        <Button type="warning">测试warning</Button>
        <Button type="success" icon="search">测试success</Button>
        <Button type="success" icon="search" disabled>测试success</Button>
        <Button type="info">测试info</Button>
        <Button type="ghost">测试ghost</Button>
        <Button size="large">测试</Button>
        <Button type="dashed">测试</Button>
        <Button icon="search" circle></Button>
        <Button icon="search" href="#afaf" target="_blank"></Button>
        <ButtonGroup>
            <Button type="primary">测试</Button>
            <Button type="primary" >测试</Button>
            <Button type="primary">测试</Button>
            <Button type="primary">测试</Button>
        </ButtonGroup>

        <div
            style={{
                width: 400,
                margin: "10px auto",
                border: '1px solid #ccc',
                padding: 5
            }}
        >
            <Button block type="danger" >测试danger</Button>
            <Button block type="warning" loading>测试warning</Button>
            <Button block type="success" loading>测试success</Button>
        </div>
    </div>
    , demo);