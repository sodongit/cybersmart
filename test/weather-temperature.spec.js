import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import {WeatherTemperature} from "../src/components/weather-temperature/weather-temperature";

let rootContainer;

beforeEach(() => {
    rootContainer = global.document.createElement("div");
    global.document.body.appendChild(rootContainer);
});

afterEach(() => {
    global.document.body.removeChild(rootContainer);
    rootContainer = null;
});

describe("weather temprature testing", () => {
    it("renders the inital text", () => {
        act(() => {
            ReactDOM.render(<WeatherTemperature />, rootContainer);
        });
        const span = rootContainer.querySelector("span");
        expect(span.textContent).to.equal("It's 12C outside");
    });
});