import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import {CpuTemperature} from "../src/components/cpu-temprature/cpu-temperature";
var jsdom = require("mocha-jsdom");
// just need the one instance of this then use global.document
global.document = jsdom({
    url: "http://localhost:3000/"
});


let rootContainer;

beforeEach(() => {
    rootContainer = document.createElement("div");
    document.body.appendChild(rootContainer);
});

afterEach(() => {
    document.body.removeChild(rootContainer);
    rootContainer = null;
});

describe("cpu temperature component test ", () => {
    it("renders the inital text", () => {
        act(() => {
            ReactDOM.render(<CpuTemperature />, rootContainer);
        });
        const span = rootContainer.querySelector("span");
        expect(span.textContent).to.equal("the cputemp is 10C");
    });
});